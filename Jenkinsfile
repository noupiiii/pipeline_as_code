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
                // On retire la ligne "user root" qui causait l'erreur 127
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_TOKEN')]) {
                    sh '''
                        # On nettoie le remote s'il existe déjà
                        git remote remove heroku || true

                        # On ajoute le remote proprement (avec des guillemets simples pour protéger le token)
                        git remote add heroku https://root:${HEROKU_TOKEN}@git.heroku.com/${HEROKU_APP_NAME}.git

                        # On s'assure que Jenkins sait qu'on est sur une branche
                        git checkout -b main || git checkout main

                        # On pousse vers Heroku
                        git push heroku main:master --force
                    '''
                }
            }
        }
  }
}
