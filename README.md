## Automated DevOps Incident Management Platform

## Project Overview
The DevOps Ticket Management System is designed to streamline incident resolution in IT environments. It employs Django and Django REST Framework for the backend, with PostgreSQL for data management. 

The frontend is developed using React, HTML, CSS, and JavaScript, offering dynamic features such as ticket categorization and automated incident resolution workflows. 

Infrastructure automation is achieved through Terraform, provisioning AWS resources efficiently. Docker and Ansible are used for containerization and deployment, and the system's performance is monitored using Prometheus and Grafana.


<br>

<p align="center">
  <img src="FrontEndIncidentManagement.png" alt="Front End" width="1000">
</p>

*Screenshot displaying the front-end interface of the application.*

---



## Features
- **CRUD Operations**: Create, read, update, and delete tickets.
- **User Authentication**: Advanced user management with role-based access control.
- **AWS Integration**: Provision and manage AWS resources using Terraform.
- **Monitoring and Logging**: Integrated with Prometheus and Grafana for monitoring; ELK stack for logging.
- **Incident Resolution Workflows**: Automated workflows for escalations, notifications, and documentation.
- **Dashboard**: Visualize the status of incidents in real-time.

## Technologies Used
- **Backend**: Django, Django REST Framework, PostgreSQL
- **Frontend**: React, HTML, CSS, JavaScript
- **Infrastructure**: Terraform, AWS
- **Containerization and Deployment**: Docker, Ansible
- **CI/CD**: Jenkins, GitHub Actions
- **Monitoring**: Prometheus, Grafana

## Setup and Installation

### Prerequisites
- Python
- PostgreSQL
- Docker

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/ticket-management-system.git](https://github.com/NikkaLuna/Automated_DevOps_Incident_Management_Platform
    cd ticket-management-system
    ```

2. **Set up the backend**:
    - Install dependencies:
      ```bash
      pip install -r requirements.txt
      ```
    - Configure PostgreSQL:
      ```bash
      # Update database settings in settings.py
      python manage.py migrate
      python manage.py createsuperuser
      python manage.py runserver
      ```

3. **Set up the frontend**:
    - Navigate to the frontend directory:
      ```bash
      cd react-frontend
      ```
    - Install dependencies and start the development server:
      ```bash
      npm install
      npm start
      ```

4. **Dockerize the application**:
    - Build and run the Docker containers:
      ```bash
      docker-compose up --build
      ```

## Infrastructure Provisioning

- **Provision AWS resources using Terraform**:
  - Initialize Terraform and apply configuration:
    ```bash
    cd terraform
    terraform init
    terraform apply
    ```

## Deployment

- **Deploy with Ansible**:
  - Run Ansible playbooks for server configuration and deployment:
    ```bash
    ansible-playbook -i inventory deploy.yml
    ```

## Monitoring

- **Set up Prometheus and Grafana**:
  - Configure Prometheus to collect metrics and Grafana to visualize them:
    ```bash
    # Prometheus and Grafana configuration files are located in the monitoring directory
    docker-compose -f monitoring/docker-compose.yml up -d
    ```

## Usage

- **Access the application**:
  - Backend: `http://localhost:8000`
  - Frontend: `http://localhost:3000`
  - Grafana Dashboard: `http://localhost:3000`

- **Create and manage tickets**: Use the frontend interface to create, view, update, and delete tickets.

- **Monitor application performance**: Access the Grafana dashboard to view real-time metrics.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
