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
            steps {
                sh '''
                echo 'Test stage'
                [ -f dist/index.html ] && echo 'dist/index.html file exists' || echo 'index.html file not found'
                '''
            }
        }
    }
}
