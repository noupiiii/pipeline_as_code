pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        // Vérifie que ce nom correspond exactement à ton app sur Heroku
        HEROKU_TOKEN = credentials('HEROKU_API_KEY')
    }

    stages {
        stage('Install') {
            steps {
                csh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy heroku') {
          steps {
            withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable:'MY_KEY' )]) {
              sh '''
                git push https://github.com/noupiiii/pipeline_as_code.git HEAD:refs/heads/main --force
                '''
            }

            }
        }
  }
}
