import { useState } from 'react'

function App() {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const curriculum = {
    "كورس React العربي الكامل": [
      { 
        title: "١. تهيئة البيئة والـ JSX", 
        content: "الدرس الأول: تعلم كيف تكتب HTML داخل JavaScript. هذا ما يسمى JSX. القاعدة الأساسية: يجب أن يكون لكل كود عنصر أب واحد فقط.",
        code: "// مثال صحيح:\nfunction Welcome() {\n  return (\n    <div>\n      <h1>أهلاً بك</h1>\n      <p>هذا درس JSX</p>\n    </div>\n  );\n}",
        task: "تمرين: جرب إنشاء عنصر div يحتوي على عنوان وصورة."
      },
      { 
        title: "٢. التعامل مع useState Hook", 
        content: "الدرس الثاني: كيف تجعل الموقع يتفاعل مع المستخدم؟ نستخدم useState لتخزين البيانات التي تتغير (مثل العداد أو المدخلات).",
        code: "const [val, setVal] = useState('');\n\n<input onChange={(e) => setVal(e.target.value)} />",
        task: "تمرين: قم بإنشاء زر يزيد رقم العداد عند كل ضغطة."
      }
    ],
    "English Programming Course": [
      { 
        title: "1. Components & Props", 
        content: "Lesson: Learn how to pass data between components using Props. Think of Props as arguments for a function.",
        code: "function User(props) {\n  return <h2>Hello, {props.name}</h2>;\n}\n\n// Usage:\n<User name='Nidal' />",
        task: "Task: Create a 'Card' component that accepts 'title' and 'price' as props."
      }
    ],
    "Cours de Programmation Français": [
      { 
        title: "1. Les Listes et Keys", 
        content: "Leçon: Comment afficher une liste de données. En React, on utilise la fonction .map() et chaque élément doit avoir une 'key' unique.",
        code: "const items = ['React', 'Vite', 'CSS'];\n\n{items.map((item) => (\n  <li key={item}>{item}</li>\n))}",
        task: "Exercice: Créez une liste de vos langages de programmation préférés."
      }
    ]
  };

  return (
    <div style={{ padding: '20px', direction: 'rtl', textAlign: 'center', fontFamily: 'Arial', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <header style={{ background: '#213547', color: 'white', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
        <h1 style={{ margin: '0' }}>🎓 دروس أكاديمية نضال وطفى</h1>
        <p>منهج تعليمي تطبيقي للمبرمجين</p>
      </header>

      {Object.entries(curriculum).map(([course, lessons]) => (
        <div key={course} style={{ textAlign: 'right', marginBottom: '40px' }}>
          <h2 style={{ color: '#646cff', borderBottom: '2px solid #ddd' }}>{course}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
            {lessons.map((lesson, index) => (
              <div key={index} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3>{lesson.title}</h3>
                <button 
                  onClick={() => setSelectedLesson(lesson)}
                  style={{ backgroundColor: '#646cff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}
                >
                  فتح الدرس المكتوب 📖
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedLesson && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: 'white', width: '90%', maxWidth: '600px', padding: '25px', borderRadius: '20px', textAlign: 'right', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ color: '#213547' }}>{selectedLesson.title}</h2>
            <p style={{ lineHeight: '1.6', fontSize: '18px' }}>{selectedLesson.content}</p>
            
            <div style={{ direction: 'ltr', textAlign: 'left', backgroundColor: '#282c34', color: '#61dafb', padding: '15px', borderRadius: '10px', marginTop: '15px', overflowX: 'auto' }}>
              <pre><code>{selectedLesson.code}</code></pre>
            </div>

            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e9', borderRight: '5px solid #4caf50' }}>
              <strong>💪 تطبيق عملي:</strong> {selectedLesson.task}
            </div>

            <button 
              onClick={() => setSelectedLesson(null)}
              style={{ width: '100%', marginTop: '25px', padding: '15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}
            >
              إغلاق الدرس
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
