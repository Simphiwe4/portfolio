import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 7,
      name: 'E commerce website',
      summary: "A resturant e-commerce website , It features a user-friendly interface for browsing and ordering food, with a secure payment system and an admin panel for managing products and orders.",
      description: "This project is a restaurant e-commerce website that allows users to browse and order food online. It features a user-friendly interface for easy navigation, a secure payment system for safe transactions, and an admin panel for managing products and orders. The website is designed to provide a seamless experience for both customers and administrators, ensuring efficient order processing and product management.",
      projectLink: 'https://github.com/Simphiwe4/Ecommerce-web',
      tags: [Tag.HTML5, Tag.CSS3,  Tag.DJANGO, Tag.PYTHON, Tag.SQLITE],
      pictures: [""]
    },
    {
      id: 2,
      name: 'K means Clustering',
      summary: "K-means clustering is a machine learning algorithm used to partition a dataset into K distinct clusters based on feature similarity.",
      description: "K-means clustering is a machine learning algorithm used to partition a dataset into K distinct clusters based on feature similarity. It works by initializing K centroids, assigning each data point to the nearest centroid, and then updating the centroids based on the mean of the assigned points. This process iterates until convergence, resulting in clusters that minimize intra-cluster variance. K-means is widely used for tasks such as customer segmentation, image compression, and anomaly detection.",
      projectLink: 'https://github.com/Simphiwe4/K-means-clustering',
      tags: [Tag.CSHARP, Tag.UNITY],
      pictures: ["../../assets/kmeans01.jpg", "../../assets/kmeans02.jpg"]
    },
  
    
    {
      id: 3,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by Barbara Calderon.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: 'https://github.com/Simphiwe4/portfolio',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/port01.png", "../../assets/port02.png"]
    },
    {
      id: 4,
      name: 'Binary decoding switches',
      summary: "A binary decoding switches is a device that converts binary signals into human-readable information, often used in digital electronics and computing.",
      description: "A binary decoding switch is a device that converts binary signals into human-readable information, often used in digital electronics and computing. It interprets binary inputs (0s and 1s) and activates corresponding outputs based on predefined logic. This allows for the representation of complex data in a simplified manner, enabling easier interaction with digital systems. Binary decoding switches are commonly used in applications such as data transmission, control systems, and user interfaces.",
      projectLink: 'https://github.com/Simphiwe4/Binary-decoding-switches',
      tags: [Tag.C],
      pictures: ["../../assets/circuit.jpg", "../../assets/Schematic.jpg"]
    },
    
   
    
    
   
   
    
    
   
    
  
    

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Projects');
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
