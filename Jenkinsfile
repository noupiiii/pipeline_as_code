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
                // On installe la librairie manquante avant tout
                sh 'user root' // Note: Si ça bloque, essaie sans cette ligne
                sh 'apt-get update && apt-get install -y libatomic1'

                // Ensuite on continue normalement
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_TOKEN')]) {
                    // Utilisation de guillemets simples '' pour éviter l'erreur de syntaxe Groovy
                    sh 'git remote add heroku https://root:${HEROKU_TOKEN}@git.heroku.com/${HEROKU_APP_NAME}.git || true'
                    sh 'git push heroku main:master --force'
                }
            }
        }
    }
}
