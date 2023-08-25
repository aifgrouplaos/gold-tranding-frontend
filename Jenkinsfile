pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'i am going to build it '
            }
        }
        stage('Deploy') {
                steps {
                    echo 'i am going to deploy it '
                    sh 'docker-compose up --build -d dev'
                    sh 'docker image prune -f'
                }
        }
    }
}