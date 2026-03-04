pipeline {
    agent any

    tools {
        nodejs 'NodeJS24'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy Heroku') {
            steps {
               withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_TOKEN')]) {
                    sh "git push https://heroku:${HEROKU_TOKEN}@git.heroku.com/tp-pipeline-as-code.git HEAD:main --force"
                }
            }
        }
  }
}
