import {
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
  sanitizeInput,
  validateContactForm,
} from '../validation';

describe('Validation Functions', () => {
  describe('validateEmail', () => {
    it('should validate correct email formats', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('should reject invalid email formats', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    it('should validate correct phone formats', () => {
      expect(validatePhone('1234567890')).toBe(true);
      expect(validatePhone('+90 555 123 45 67')).toBe(true);
      expect(validatePhone('(555) 123-4567')).toBe(true);
    });

    it('should reject invalid phone formats', () => {
      expect(validatePhone('123')).toBe(false);
      expect(validatePhone('abc')).toBe(false);
    });
  });

  describe('validateName', () => {
    it('should validate correct name lengths', () => {
      expect(validateName('Jo')).toBe(true);
      expect(validateName('John Doe')).toBe(true);
    });

    it('should reject invalid name lengths', () => {
      expect(validateName('J')).toBe(false);
      expect(validateName('')).toBe(false);
      expect(validateName('a'.repeat(101))).toBe(false);
    });
  });

  describe('validateMessage', () => {
    it('should validate correct message lengths', () => {
      expect(validateMessage('Hello World')).toBe(true);
      expect(validateMessage('This is a test message')).toBe(true);
    });

    it('should reject invalid message lengths', () => {
      expect(validateMessage('Hi')).toBe(false);
      expect(validateMessage('')).toBe(false);
      expect(validateMessage('a'.repeat(1001))).toBe(false);
    });
  });

  describe('sanitizeInput', () => {
    it('should remove HTML tags', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).toBe('alert("xss")');
      expect(sanitizeInput('Hello <b>World</b>')).toBe('Hello World');
    });

    it('should remove javascript: protocol', () => {
      expect(sanitizeInput('javascript:alert(1)')).toBe('alert(1)');
    });

    it('should remove event handlers', () => {
      expect(sanitizeInput('onclick=alert(1)')).toBe('alert(1)');
    });

    it('should trim whitespace', () => {
      expect(sanitizeInput('  Hello World  ')).toBe('Hello World');
    });
  });

  describe('validateContactForm', () => {
    it('should return no errors for valid form data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
      };
      const errors = validateContactForm(validData);
      expect(Object.keys(errors).length).toBe(0);
    });

    it('should return errors for invalid form data', () => {
      const invalidData = {
        name: 'J',
        email: 'invalid',
        message: 'Hi',
      };
      const errors = validateContactForm(invalidData);
      expect(errors.name).toBeDefined();
      expect(errors.email).toBeDefined();
      expect(errors.message).toBeDefined();
    });
  });
});