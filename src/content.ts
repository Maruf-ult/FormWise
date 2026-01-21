import { faker } from '@faker-js/faker';

const fillForm = (): void => {
  const elements = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    'input, textarea, select'
  );

  elements.forEach((element) => {
    // 1. Skip logic (No more "any")
    if (element.disabled) return;
    if ('readOnly' in element && (element as HTMLInputElement | HTMLTextAreaElement).readOnly) return;
    if (element instanceof HTMLInputElement && element.type === 'hidden') return;

    let value = '';
    const name = element.name?.toLowerCase() || '';
    const id = element.id?.toLowerCase() || '';
    
    // Helper for keyword matching
    const matches = (keywords: string[]): boolean => 
      keywords.some(k => name.includes(k) || id.includes(k));

    // 2. Element-specific Logic
    if (element instanceof HTMLSelectElement) {
      if (element.options.length > 1) {
        element.selectedIndex = Math.floor(Math.random() * (element.options.length - 1)) + 1;
      }
    } 
    else if (element instanceof HTMLTextAreaElement) {
      value = faker.lorem.paragraph();
    } 
    else if (element instanceof HTMLInputElement) {
      if (element.type === 'checkbox' || element.type === 'radio') {
        element.checked = Math.random() > 0.5;
      } else if (element.type === 'email' || matches(['email'])) {
        value = faker.internet.email();
      } else if (element.type === 'tel' || matches(['phone', 'tel'])) {
        value = faker.phone.number();
      } else if (matches(['name', 'first', 'last'])) {
        value = faker.person.fullName();
      } else {
        value = faker.lorem.word();
      }
    }

    // 3. Apply and Trigger Events
    if (value && !(element instanceof HTMLSelectElement)) {
      element.value = value;
    }

    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  });
};

const clearForm = (): void => {
  const elements = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    'input, textarea, select'
  );
  
  elements.forEach((element) => {
    if (element instanceof HTMLInputElement && (element.type === 'checkbox' || element.type === 'radio')) {
      element.checked = false;
    } else if (element instanceof HTMLSelectElement) {
      element.selectedIndex = 0;
    } else {
      element.value = '';
    }
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  });
};

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === 'FILL_FORM') fillForm();
  if (request.action === 'CLEAR_FORM') clearForm();
});