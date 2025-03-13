pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:23-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                echo 'Building Animals...'
                ls -lah
                node --version
                npm --version
                npm ci
                npm run build
                ls -lahtr
                '''
            }
        }
        stage('Test') {
            sh '''
            echo 'Test stage'
            '''
        }
    }
}
