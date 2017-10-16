angular.module('app').service('logSrv', function($http){
    this.uploadImage = (file) => {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child('images/' + file.name).put(file);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                        break;
                }
        }, function(error) {
    
        }, function() {
            let downloadURL = [uploadTask.snapshot.downloadURL];
            this.downloadURL = downloadURL;
            console.log(downloadURL)
            return $http.post('/log', downloadURL);
            });
    
    }


    this.getData = () => {
        return $http.get('api/log').then(response => {
            console.log("hello from logSrv", response)
            return response
        })
    }



})