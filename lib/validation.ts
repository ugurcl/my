export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s()+-]+$/;
  return phoneRegex.test(phone) && phone.length >= 10;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

export const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10 && message.trim().length <= 1000;
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, ''); // Remove event handlers
};

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const validateContactForm = (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}): FormErrors => {
  const errors: FormErrors = {};

  if (!validateName(data.name)) {
    errors.name = "İsim en az 2, en fazla 100 karakter olmalıdır";
  }

  if (!validateEmail(data.email)) {
    errors.email = "Geçerli bir e-posta adresi giriniz";
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Geçerli bir telefon numarası giriniz";
  }

  if (!validateMessage(data.message)) {
    errors.message = "Mesaj en az 10, en fazla 1000 karakter olmalıdır";
  }

  return errors;
};