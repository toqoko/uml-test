// script.js

// Вопросы и ответы
const quizData = [
  {
      question: "Что означает UML?",
      options: ["Unified Modeling Language", "Universal Markup Language", "User Machine Language"],
      correct: 0
  },
  {
      question: "Когда был создан UML?",
      options: ["1995", "1997", "2000"],
      correct: 1
  },
  {
      question: "Кто является основным автором UML?",
      options: ["Джеймс Гослинг", "Гради Буч", "Бьёрн Страуструп"],
      correct: 1
  },
  {
      question: "Что является основным элементом диаграммы классов?",
      options: ["Класс", "Актор", "Компонент"],
      correct: 0
  },
  {
      question: "Какой тип диаграммы используется для отображения времени взаимодействия объектов?",
      options: ["Диаграмма классов", "Диаграмма последовательностей", "Диаграмма компонентов"],
      correct: 1
  },
  {
      question: "Какое отношение представляет 'наследование' в UML?",
      options: ["Ассоциация", "Обобщение", "Композиция"],
      correct: 1
  },
  {
      question: "Что показывает диаграмма вариантов использования?",
      options: ["Логику выполнения", "Функциональность системы", "Иерархию классов"],
      correct: 1
  },
  {
      question: "Какой тип диаграммы используется для моделирования процессов?",
      options: ["Диаграмма деятельности", "Диаграмма компонентов", "Диаграмма объектов"],
      correct: 0
  },
  {
      question: "Что такое ассоциация в UML?",
      options: ["Тип данных", "Отношение между классами", "Объект"],
      correct: 1
  },
  {
      question: "Какой элемент в UML отображает пользователя системы?",
      options: ["Класс", "Актор", "Компонент"],
      correct: 1
  },
  {
      question: "Как называется отношение 'часть-целое' в UML?",
      options: ["Ассоциация", "Композиция", "Обобщение"],
      correct: 1
  },
  {
      question: "Что такое инкапсуляция в объектно-ориентированном программировании?",
      options: ["Сокрытие реализации", "Множественное наследование", "Объединение данных"],
      correct: 0
  },
  {
      question: "Какой элемент в UML используется для моделирования модуля системы?",
      options: ["Класс", "Компонент", "Объект"],
      correct: 1
  },
  {
      question: "Как называется механизм создания нового класса на основе существующего?",
      options: ["Полиморфизм", "Наследование", "Инкапсуляция"],
      correct: 1
  },
  {
      question: "Какой тип диаграммы используется для отображения структуры системы?",
      options: ["Диаграмма классов", "Диаграмма деятельности", "Диаграмма последовательностей"],
      correct: 0
  },
  {
      question: "Какой элемент UML используется для описания работы программной системы?",
      options: ["Актор", "Вариант использования", "Объект"],
      correct: 1
  },
  {
      question: "Какой тип диаграммы описывает взаимодействие объектов через сообщения?",
      options: ["Диаграмма последовательностей", "Диаграмма компонентов", "Диаграмма объектов"],
      correct: 0
  },
  {
      question: "Как называется отношение между классами, где один зависит от другого?",
      options: ["Ассоциация", "Зависимость", "Композиция"],
      correct: 1
  },
  {
      question: "Что является основным преимуществом UML?",
      options: ["Создание кода", "Визуализация и документирование системы", "Оптимизация алгоритмов"],
      correct: 1
  },
  {
      question: "Какой элемент используется для представления статического состояния системы?",
      options: ["Объект", "Класс", "Компонент"],
      correct: 1
  }
];

// Функция для отрисовки вопросов
function renderQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizData.forEach((item, index) => {
      const questionBlock = document.createElement("div");
      questionBlock.classList.add("question");

      const questionTitle = document.createElement("h2");
      questionTitle.textContent = `${index + 1}. ${item.question}`;
      questionBlock.appendChild(questionTitle);

      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("options");

      item.options.forEach((option, optionIndex) => {
          const label = document.createElement("label");
          label.innerHTML = `
              <input type="radio" name="question-${index}" value="${optionIndex}">
              ${option}
          `;
          label.setAttribute("data-option-index", optionIndex);
          optionsContainer.appendChild(label);
      });

      questionBlock.appendChild(optionsContainer);
      quizContainer.appendChild(questionBlock);
  });
}

// Проверка ответов с подсветкой
function checkAnswers() {
  let score = 0;

  quizData.forEach((item, index) => {
      const questionBlock = document.querySelectorAll(".question")[index];
      const options = questionBlock.querySelectorAll("label");
      const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);

      // Очистка предыдущей подсветки
      options.forEach(option => {
          option.classList.remove("correct", "incorrect");
      });

      // Проверка правильности ответа
      if (selectedOption) {
          const selectedValue = parseInt(selectedOption.value);
          if (selectedValue === item.correct) {
              score++;
              options[selectedValue].classList.add("correct"); // Правильный ответ
          } else {
              options[selectedValue].classList.add("incorrect"); // Неправильный ответ
          }
      }

      // Подсветка правильного ответа
      options[item.correct].classList.add("correct");
  });

  const result = document.getElementById("result");
  result.textContent = `Ваш результат: ${score} из ${quizData.length}`;
}

// События
document.getElementById("submit-btn").addEventListener("click", checkAnswers);

// Инициализация
renderQuiz();
