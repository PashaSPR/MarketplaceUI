import './Main.css';


function About(){
    return(
        <div className="Main">
            <h2>About</h2>
            <p>Додаток працює на технології React</p>
            <p>
                API створено на мові JAVA, програма Intelije IDEA,база даних PostgresSQL
            </p>
            <h4>Виконавці</h4>
            <p>Салуха Володимир - API+UI(продавці)</p>
            <p>Каленський Олександр - API (Admin, Spring Security)</p>
            <p>Білоус Тетяна - API+UI(покупці)</p>
            <p>Собець Павло - UI(покупці)</p>
            
            <h4>Керівник </h4> <p>Левківський Віталій</p>
        </div>
    );
}

export default About;