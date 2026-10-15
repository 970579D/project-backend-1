pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Check Node.js') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start application') {
            steps {
                sh '''
                    nohup npm run start > app.log 2>&1 &
                    echo $! > app.pid
                '''
            }
        }
    }
}
