pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        // Vérifie que ce nom correspond exactement à ton app sur Heroku
        HEROKU_APP_NAME = 'tp-pipeline-as-code'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // 'HEROKU_API_KEY' doit être l'ID du secret créé dans Jenkins
                withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_TOKEN')]) {
                    // Correction : Ajout de 'env.' et remplacement de 'root' par '_' (convention Heroku)
                    sh "git remote add heroku https://_:${HEROKU_TOKEN}@git.heroku.com/${env.HEROKU_APP_NAME}.git || true"
                    sh "git push heroku main:master --force"
                }
            }
        }
    }
}
