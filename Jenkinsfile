pipeline {
    agent any

    tools {
        nodejs 'NodeJS24'
    }

    environment {
        // Vérifie que ce nom correspond exactement à ton app sur Heroku
        HEROKU_TOKEN = credentials('HEROKU_API_KEY')
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
                    sh '''
                        # 1. On s'assure d'être sur la branche main
                        git checkout main || git checkout -b main

                        # 2. On ajoute l'adresse de Heroku avec le Token
                        git remote remove heroku || true
                        git remote add heroku https://root:${HEROKU_TOKEN}@git.heroku.com/tp-pipeline-as-code.git

                        # 3. On pousse vers Heroku (et PAS vers GitHub)
                        git push heroku main:main --force
                    '''
                }
            }
        }
  }
}
