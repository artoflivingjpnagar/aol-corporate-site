import { formatLeadMessage, isMobileDevice, whatsappLinks, type Lead } from './whatsapp';

/** On submit: build the message from the form and open WhatsApp addressed to the centre. */
export function initLeadForm(): void {
  const form = document.querySelector<HTMLFormElement>('form.lead');
  if (!form) return;

  const phone = form.dataset.whatsapp ?? '';
  const greeting = form.dataset.greeting ?? '';
  const sent = form.querySelector<HTMLElement>('.sent');
  const desktopNote = form.querySelector<HTMLElement>('.sent-desktop');
  const mobileNote = form.querySelector<HTMLElement>('.sent-mobile');
  const webLink = form.querySelector<HTMLAnchorElement>('.use-web');
  const retryLink = form.querySelector<HTMLAnchorElement>('.retry');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const field = (key: string): string => String(data.get(key) ?? '').trim();

    const lead: Lead = {
      name: field('name'),
      company: field('company'),
      phone: field('phone'),
      email: field('email'),
      size: field('size'),
      interest: field('interest'),
      note: field('note'),
    };

    const isMobile = isMobileDevice(navigator.userAgent);
    const links = whatsappLinks(phone, formatLeadMessage(greeting, lead), isMobile);

    if (isMobile) {
      // wa.me in a new tab hands off to the phone's WhatsApp app and keeps this page open.
      // A blocked popup returns null: fall back to this tab.
      if (!window.open(links.app, '_blank')) window.location.href = links.app;
    } else {
      // whatsapp:// launches the desktop app without navigating away, so the note below stays visible.
      window.location.href = links.app;
    }

    if (webLink) webLink.href = links.web;
    if (retryLink) retryLink.href = links.app;
    if (desktopNote) desktopNote.hidden = isMobile;
    if (mobileNote) mobileNote.hidden = !isMobile;
    if (sent) sent.hidden = false;
  });
}
