
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly JDBC = new Tag('JDBC', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
    static readonly PLAYWWRIGHT = new Tag('Playwright', '#4a6a77');
    static readonly SELENIUM = new Tag('Selenium Driver', '#4a6a77');
    static readonly PANDAS = new Tag('Pandas', '#4a6a77');
    static readonly DASH = new Tag('Dash', '#4a6a77');
    static readonly PLOTLY = new Tag('Plotly', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly INSOMNIA = new Tag('Insomnia', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly CSHARP = new Tag('C#', '#4a6a77');
    static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly MOCKITO = new Tag('Mockito', '#5a7581');
    static readonly C = new Tag('C++', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly DJANGO = new Tag('Django', '#192129');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly PYDANTIC = new Tag('Pydantic', '##4a6a77');
    static readonly GOLANG = new Tag('Golang', '#457189');
    static readonly UNITY = new Tag('Unity', '#457189' )






    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}