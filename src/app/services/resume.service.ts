import {Injectable} from '@angular/core';
import {Skill} from '../model/skill';
import {History} from '../model/history';
import {SkillType} from '../model/skillType';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  experiences: History[];
  educations: History[];
  skills: Skill[];

  constructor() {
    this.skills = [
      new Skill({
        label: 'Javascript (ES5, ES6+)',
        level: 60,
        levelLabel: 'zaawansowany',
        highlighted: true,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'TypeScript',
        level: 60,
        levelLabel: 'zaawansowany',
        highlighted: true,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'Angular',
        level: 65,
        levelLabel: 'zaawansowany',
        highlighted: true,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'Saas',
        level: 65,
        levelLabel: 'zaawansowany',
        highlighted: false,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'CSS3',
        level: 80,
        levelLabel: 'biegły',
        highlighted: false,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'HTML5',
        level: 90,
        levelLabel: 'biegły',
        highlighted: false,
        type: SkillType.FRONTEND
      }),

      new Skill({
        label: 'Bootstrap',
        level: 90,
        levelLabel: 'biegły',
        highlighted: false,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'jQuery',
        level: 90,
        levelLabel: 'biegły',
        highlighted: false,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'Webpack',
        level: 50,
        levelLabel: 'podstawowy',
        highlighted: false,
        type: SkillType.FRONTEND
      }),
      new Skill({
        label: 'Java 8+',
        level: 80,
        levelLabel: 'biegły',
        highlighted: true,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'Spring',
        level: 90,
        levelLabel: 'biegły',
        highlighted: true,
        type: SkillType.BACKEND
      }),
      /*
      new Skill({
        label: 'Spring boot',
        level: 90,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'JPA',
        level: 60,
        type: SkillType.BACKEND
      }),
       */
      new Skill({
        label: 'JPA',
        level: 60,
        levelLabel: 'zaawansowany',
        highlighted: true,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'Gradle',
        level: 60,
        levelLabel: 'zaawansowany',
        highlighted: false,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'Git',
        level: 80,
        levelLabel: 'biegły',
        highlighted: false,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'Jenkins',
        level: 40,
        levelLabel: 'podstawowy',
        highlighted: false,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'Docker',
        level: 40,
        levelLabel: 'podstawowy',
        highlighted: false,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'SQL',
        level: 90,
        levelLabel: 'biegły',
        highlighted: false,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'PHP',
        levelLabel: 'podstawowy',
        highlighted: false,
        level: 40,
        type: SkillType.BACKEND
      }),
      new Skill({
        label: 'English',
        level: 2,
        levelLabel: 'w stopniu umożliwiającym czytanie dokumentacji technicznej',
        type: SkillType.LANGUAGE
      })
    ];
    this.educations = [
      new History({
        label: 'Zachodniopomorski Uniwersytet Technologiczny w Szczecinie',
        level: 'Kierunek Informatyka - magister',
        dateFrom: '2008',
        dateTo: '2010',
        achievements: []
      }),
      new History({
        label: 'Politechnika Szczecińska',
        level: 'Kierunek Informatyka - inżynier',
        dateFrom: '2004',
        dateTo: '2008',
        achievements: ['Implementacja i wdrożenie systemu wspomagającego kontakt studenta z dziekanatem.']
      })
    ];
    this.experiences = [
      new History({
        level: 'Starszy specjalista ds. programowania i rozwoju systemów informatycznych',
        label: 'DMZ sp. z o.o.',
        dateFrom: 'październik 2015',
        dateTo: 'obecnie',
        achievements: [
          'praca w zespole nad aplikacją typu HRMS dla dużych firm z sektora bankowego',
          'wdrażanie nowych funkcjonalności opartych na frameworku Spring',
          'implementacja komponentów aplikacji w Angular przy użyciu TypeScript',
          'integracja aplikacji z silnikiem workflow Camunda BPMN',
          'konfiguracja narzędzi CI (Jenkins), dbanie o jakość kodu aplikacji (SonarQube)'
        ]
      }),
      new History({
        level: 'Programista',
        label: 'HR-SERVICE.pl sp. z o.o.',
        dateFrom: 'październik 2010',
        dateTo: 'październik 2015',
        achievements: [
          'tworzenie i rozwój oprogramowania w środowisku Java (JEE, JSP, HTML, CSS, jQuery, Adelia)',
          'budowanie zaawansowanych raportów w pdf przy użyciu iText',
          'przygotowywanie dokumentacji dotyczącej tworzonego oraz rozwijanego oprogramowania'
        ]
      }),
      new History({
        level: 'SYSTEM B2B DLA PODOLOGIA.PL',
        label: 'Własny projekt',
        dateFrom: '2012',
        dateTo: '2017',
        achievements: [
          'zaprojektowanie i wykonanie systemu do realizacji zamowień. Integracja z REST API systemu ERP. ' +
          'Wykorzystane technologie: jQuery, JavaScript, Bootstrap, HTML5, CSS3, PHP'
        ]
      }),
      new History({
        level: 'Specjalista ds. programowania i rozwoju systemów informatycznych',
        label: 'DMZ sp. z o.o.',
        dateFrom: 'lipiec 2007',
        dateTo: 'październik 2010',
        achievements: [
          'programowanie w środowisku Java (JEE, JSP, HTML, CSS, jQuery, Adelia studio)',
          'analiza funkcjonowania oraz poprawa błędów w istniejącym już oprogramowaniu',
          'kontakt z dużymi klientami z sektora bankowego'
        ]
      })
    ];
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getEducations(): History[] {
    return this.educations;
  }

  getExperiences(): History[] {
    return this.experiences;
  }

}
