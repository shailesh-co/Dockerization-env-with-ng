pipeline {
  agent any

  parameters {
    choice(name: 'ENV', choices: ['uat', 'qa', 'prod'], description: 'Select Environment')
  }

  environment {
    IMAGE_NAME = "my-angular-app"
  }

  stages {
    stage('Checkout Code') {
      steps {
        git branch: 'master', url: 'https://github.com/shailesh-co/Dockerization-env-with-ng.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh "docker build --build-arg ENV=${params.ENV} -t ${IMAGE_NAME}:${params.ENV} ."
      }
    }

    stage('Run Docker Container') {
      steps {
        script {
          sh "docker rm -f ${IMAGE_NAME}-${params.ENV} || true"
          def port = (params.ENV == "uat") ? "8082" : (params.ENV == "qa") ? "8081" : "8080"
          sh "docker run -d -p ${port}:80 --name ${IMAGE_NAME}-${params.ENV} ${IMAGE_NAME}:${params.ENV}"
        }
      }
    }
  }
}
