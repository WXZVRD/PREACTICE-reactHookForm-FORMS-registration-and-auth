# 🚀 Auth Flow — Next.js + React Hook Form + Zod + shadcn/ui

Полностью типизированный, валидируемый и стилизованный flow для регистрации и авторизации на базе современных инструментов. Сделано с вниманием к UX, DX и архитектуре (FSD).  
**🔥 Идеально для старта любого production-ready проекта.**

---

## 📁 Структура проекта (FSD)
```
src/
├── app/
│ └── auth/
│ ├── page.tsx // Стартовая страница с выбором действия
│ ├── registration/
│ │ └── page.tsx // Форма регистрации
│ └── authorization/
│ └── page.tsx // Форма входа
├── features/
│ └── auth/
│ ├── model/ // Zod-схемы, useForm-хуки, типы
│ └── ui/ // Готовые формы (RegistrationForm, LoginForm)
├── shared/
│ ├── ui/ // Компоненты (Button, Input, Checkbox и т.д.)
│ └── lib/ // Утилиты, constants, helpers

yaml
Copy
Edit
```
---

## 🛠️ Технологии

| Технология           | Использование                               |
|----------------------|---------------------------------------------|
| **Next.js 14+**       | App Router, Server Components               |
| **TypeScript**        | Полная типизация                            |
| **React Hook Form**   | Контроль форм, UX-оптимизация               |
| **Zod**               | Валидация + трансформация данных            |
| **@hookform/resolvers/zod** | Интеграция RHF и Zod                   |
| **shadcn/ui**         | Современные UI-компоненты                   |
| **Sonner**            | Уведомления (toast)                         |
| **Tailwind CSS**      | Удобный и адаптивный дизайн                 |

---

## 📸 Визуалы

<div align="center">
  <img src="https://user-images.githubusercontent.com/placeholder/preview.png" alt="Registration Form Preview" width="600"/>
</div>

---

## ⚙️ Особенности

- ✅ Полностью типизированные формы
- 🧠 Умная валидация: email, пароль, подтверждение пароля, дата рождения (18+), галочка согласия
- 🧾 Zod-схема в отдельном модуле
- ✨ UI из `shadcn/ui`: чисто, современно, адаптивно
- 🧪 Гибкая архитектура (подходит для масштабирования)
- 🔒 Используется `useForm` с `onChange` для отзывчивости
- 🔁 Кнопка submit блокируется при `isSubmitting`
- 📬 Ошибки валидатора красиво выводятся через `FormMessage` и `toast()`

---

## 🧠 Пример Zod схемы

```ts
const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    passwordRepeat: z.string(),
    date: z.string().refine(...),
    policy: z.literal(true),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    path: ['passwordRepeat'],
    message: 'Пароли не совпадают',
  });
🗺️ Навигация
/auth — выбор действия

/auth/registration — форма регистрации

/auth/authorization — форма входа ```

👑 Почему это круто
Архитектура по FSD — гибко, масштабируемо

Валидация не на костылях, а через Zod

Компоненты UI унифицированы — всё под контролем

Ты можешь взять это и использовать в реальном проекте прямо сейчас
