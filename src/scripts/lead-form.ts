import { formatLeadMessage, isMobileDevice, whatsappUrl, type Lead } from './whatsapp';

/** On submit: build the message from the form and open WhatsApp addressed to the centre. */
export function initLeadForm(): void {
  const form = document.querySelector<HTMLFormElement>('form.lead');
  if (!form) return;

  const phone = form.dataset.whatsapp ?? '';
  const greeting = form.dataset.greeting ?? '';
  const sent = form.querySelector<HTMLElement>('.sent');
  const retry = form.querySelector<HTMLAnchorElement>('.retry');

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

    const url = whatsappUrl(phone, formatLeadMessage(greeting, lead), isMobileDevice(navigator.userAgent));

    // A blocked popup returns null: fall back to opening WhatsApp in this tab.
    const opened = window.open(url, '_blank');
    if (!opened) window.location.href = url;

    if (retry) retry.href = url;
    if (sent) sent.hidden = false;
  });
}
