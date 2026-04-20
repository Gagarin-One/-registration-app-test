# deploy : https://registration-app-test-pi.vercel.app/


## Регистрация на лекторий

### Установка

npm install
npm run dev

Приложение будет доступно по адресу http://localhost:5173



###Архитектура проекта
Проект построен по методологии Feature-Sliced Design

text
src/
├── app/                          # Инициализация приложения
│   └── App.tsx
├── pages/                        # Страницы
│   └── RegistrationPage.tsx
├── widgets/                      # Композиционные блоки
│   └── RegistrationWidget/
│       └── index.tsx
├── features/                     # Функциональные модули
│   ├── LectureList/              # Список лекций
│   │   ├── index.tsx
│   │   └── ui/
│   │       ├── AccordionGroup.tsx
│   │       └── LectureCard.tsx
│   └── RegistrationForm/         # Форма регистрации
│       ├── index.tsx
│       ├── model/
│       │   ├── schema.ts
│       │   └── useRegistrationForm.ts
│       └── ui/
│           └── InputField.tsx
├── entities/                     # Бизнес-сущности
│   └── lecture/
│       ├── api/
│       │   └── mockData.ts
│       └── model/
│           ├── types.ts
│           └── useLectures.ts
└── shared/                       # Переиспользуемые компоненты
    ├── assets/
    │   └── lectures/
    │       ├── lecture1.png
    │       ├── lecture2.png
    │       ├── lecture3.png
    │       ├── lecture4.png
    │       └── frame3.png
    └── ui/
        └── Modal/
            └── index.tsx
### Технологии
React 19

TypeScript

Tailwind CSS

React Hook Form

Zod

Zustand

Vite

### Адаптивность
Mobile-first подход

Точки перелома: 376px, 1024px


