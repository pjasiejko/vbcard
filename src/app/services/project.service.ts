import {Injectable} from '@angular/core';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projects: Project[];


  constructor() {
    const ESYLABUSY_PATH = 'assets/images/portfolio/esylabusy/';
    const PODOLOGIA_PATH = 'assets/images/portfolio/podologia/';
    const SPONDYLUS_PATH = 'assets/images/portfolio/spondylus/';
    const HRSERWIS_PATH = 'assets/images/portfolio/hrserwis/';
    const DMZ_PATH = 'assets/images/portfolio/dmz/';
    const DMZOLD_PATH = 'assets/images/portfolio/dmzold/';

    this.projects = [
      {
        name: 'karo hrms',
        duration: '2015 – ?',
        description: 'Jako starszy specjalista współtworzyłem aplikację do zarządzania zasobami ludzkimi. ' +
          'Z umiejętnościami full stack developera byłem odpowiedzialny za moduł do przeprowadzania ocen pracowników ' +
          'a także część bazową systemu (logowanie, zarządzanie użytkownikami i uprawnieniami, menu, główny ekran). ' +
          'Z powodzeniem zintegrowałem aplikację z silnikiem workflow Camunda BPMN dzięki czemu powstały nowe funkcjonalności takie jak: ' +
          'projektowanie diagramu BPMN czy budowanie szablonów formularzy. ' +
          'Jednymi z ostatnich funkcjonalności nad którymi pracowałem były elektroniczne teczki osobowe. ' +
          'W codziennej pracy budowałem restowe API przy wykorzystaniu technologii takich jak Java 8, Spring, Spring boot, JPA. ' +
          'Jednym z moich sukcesów w tym projekcie było zastąpienie konfiguracji Springa w xml na Spring boot. ' +
          'Uczestnicząc w tym projekcie zdobyłem doświadczenie w budowaniu zaawansowanych zapytań SQL i w pracy z bazą danych MSSQL. ' +
          'Wytworzony kod wersjonowany był za pomocą GIT-a. ' +
          'Za budowanie projektów odpowiedzialny był Gradle a ciągłą integrację zapewniał Jenkins, którego wdrażałem i konfigurowałem. ' +
          'Pracowałem także z sonarqube aby zapewnić odpowiednią jakość kodu. ' +
          'Przygotowane API wykorzystywałem podczas budowania angularowych komponentów. ' +
          'Aplikacja była responsywna dzięki wykorzystaniu klas z biblioteki Bootstrap. ' +
          'Na co dzień współpracowałem z klientami w celu przygotowywania nowych funkcjonalności oraz rozwiązywania powstałych problemów.',
        technologies: 'Java 8+, Spring, Spring boot, JPA, Gradle, Git, Jenkins, Docker, SQL, JavaScript (ES5, ES6+), ' +
          'TypeScript, Angular 8+, Saas, CSS3, HTML5, Bootstrap, jQuery, Webpack',
        pictures: [
          `${DMZ_PATH}dmz1.png`,
          `${DMZ_PATH}dmz2.png`,
          `${DMZ_PATH}dmz3.png`,
          `${DMZ_PATH}dmz4.png`,
          `${DMZ_PATH}dmz5.png`
        ]
      }, {
        name: 'system b2b dla PODOLOGIA.pl',
        duration: '2012 – 2017',
        description: 'Własny projekt. System do składania przez partnerów zamówień na wkładki ortopedyczne. ' +
          'Moduł dla warsztatu realizującego zamówienia. Moduł dla działu finansowego rozliczającego zamówienia.',
        technologies: 'PHP, jQuery, REST API systemu ERP, JavaScript, Bootstrap, HTML, CSS',
        pictures: [
          `${PODOLOGIA_PATH}podologia1.png`,
          `${PODOLOGIA_PATH}podologia2.png`,
          `${PODOLOGIA_PATH}podologia3.png`,
          `${PODOLOGIA_PATH}podologia4.png`,
          `${PODOLOGIA_PATH}podologia5.png`
        ]
      },
      {
        name: 'hr-service',
        duration: '2010 – 2015',
        description: 'Jako członek zespołu uczestniczyłem w projektowaniu ' +
          'i implementacji systemu złożonego z narzędzi do zarządzania pracownikami. ' +
          'Narzędzia umożliwiały wygenerowanie linków z zadaniami dla pracowników (ocena, wypełnienie ankiety z badaniem). ' +
          'Na podstawie zebranych informacji generowane były raporty z podsumowaniem danego procesu. ' +
          'Byłem odpowiedzialny zarówno za frontend jak i backend aplikacji. ' +
          'Pracując nad tym projektem zdobyłem doświadczenie w pisaniu programów generujących złożone raporty w formie pdf. ',
        technologies: 'JEE, JSP, Java, jQuery, JavaScript, HTML, CSS, Adelia studio',
        pictures: [
          `${HRSERWIS_PATH}hrserwis4.png`,
          `${HRSERWIS_PATH}hrserwis5.png`,
          `${HRSERWIS_PATH}hrserwis6.png`,
          `${HRSERWIS_PATH}hrserwis1.png`,
          `${HRSERWIS_PATH}hrserwis2.png`,
          `${HRSERWIS_PATH}hrserwis3.png`
        ]
      },
      {
        name: 'portal pracowników firmy Spondylus',
        duration: '2010 – 2014',
        description: 'Własny projekt. Zaprojektowanie i wykonanie systemu wspomagającego pracę firmy Spondylus. ' +
          'W szczególności zagadnienia kadrowe (urlopy, oceny pracowników) a także rozliczenia ' +
          'faktur oraz rejestrację pacjentów na wizyty.',
        technologies: 'PHP, jQuery, JavaScript, HTML, CSS',
        pictures: [
          `${SPONDYLUS_PATH}spondylus1.png`,
          `${SPONDYLUS_PATH}spondylus2.png`,
          `${SPONDYLUS_PATH}spondylus3.png`,
          `${SPONDYLUS_PATH}spondylus4.png`,
          `${SPONDYLUS_PATH}spondylus5.png`,
          `${SPONDYLUS_PATH}spondylus6.png`
        ]
      },
      {
        name: 'eSylabusy',
        duration: '2009 – 2012',
        description: 'Własny projekt. Praca w zespole implementującym system do przygotowywania sylabusów ' +
          'przedmiotów na uczelni oraz do planowania siatki zajęć. ' +
          'Wdrożony na US i WSHTP w Szczecinie.',
        technologies: 'PHP, jQuery, JavaScript, HTML, CSS',
        pictures: [
          `${ESYLABUSY_PATH}esylabusy1.png`,
          `${ESYLABUSY_PATH}esylabusy2.png`,
          `${ESYLABUSY_PATH}esylabusy3.png`,
          `${ESYLABUSY_PATH}esylabusy4.png`,
          `${ESYLABUSY_PATH}esylabusy5.png`
        ]
      },
      {
        name: 'karo hrms',
        duration: '2007 – 2010',
        description: 'Współtworzenie aplikacji do zarządzania zasobami ludzkimi. ' +
          'Analiza funkcjonowania oraz poprawa błędów w istniejącym już oprogramowaniu. ' +
          'Kontakt z dużymi klientami z sektora bankowego. ' +
          'Przygotowywanie dokumentacji do powstających funkcjonalności. ' +
          'Dzięki uczestnictwie w tym projekcie zdobyłem doświadczenie jako frontend developer.'
        ,
        technologies: 'JEE, JSP, Java, jQuery, JavaScript, HTML, CSS, Adelia studio',
        pictures: [
          `${DMZOLD_PATH}dmzold1.png`,
          `${DMZOLD_PATH}dmzold2.png`,
          `${DMZOLD_PATH}dmzold3.png`
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return this.projects;
  }

}
