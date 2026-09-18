/** Builds the WhatsApp "click to chat" link. Works with personal WhatsApp: no Business account or backend. */

export interface Lead {
  name: string;
  company: string;
  phone: string;
  email?: string;
  size: string;
  interest: string;
  note?: string;
}

/** The pre-filled message the visitor sends to the centre. */
export function formatLeadMessage(greeting: string, lead: Lead): string {
  const lines = [
    greeting,
    '',
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || '-'}`,
    `Team size: ${lead.size}`,
    `Interested in: ${lead.interest}`,
  ];
  if (lead.note) lines.push('', `Note: ${lead.note}`);
  return lines.join('\n');
}

/**
 * Phones open the WhatsApp app via wa.me; laptops go straight to WhatsApp Web,
 * skipping wa.me's intermediate "Continue to chat" page.
 */
export function whatsappUrl(phoneDigits: string, message: string, isMobile: boolean): string {
  const text = encodeURIComponent(message);
  return isMobile
    ? `https://wa.me/${phoneDigits}?text=${text}`
    : `https://web.whatsapp.com/send?phone=${phoneDigits}&text=${text}`;
}

export const isMobileDevice = (ua: string): boolean => /Android|iPhone|iPad|iPod/i.test(ua);
