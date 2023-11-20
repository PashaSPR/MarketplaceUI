import './Main.css';


function About(){
    return(
        <div className="Main">
            <h2>About</h2>
            <p>Front-end працює на технології React</p>
            <p>
                API створено на мові JAVA, середо Intelije IDEA,база даних PostgresSQL
            </p>
            <h4>Виконавці</h4>
            <p>Салуха Володимир - API+UI(продавці)</p>
            <p>Каленський Олександр - API (Admin, Spring Security)</p>
            <p>Білоус Тетяна - API+UI(коментарі)</p>
            <p>Собець Павло - API+UI(кошик)</p>
            
            <h4>Керівник </h4> <p>Левківський Віталій</p>
        </div>
    );
}

export default About;