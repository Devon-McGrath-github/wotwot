import {storage} from './dbInit'

const storageRef = storage.ref();

const imagesRef = storageRef.child('images');

export const uploadImages = (fileList, callback) => {
  for(let i = 0; i < fileList.length; i++) {
    var uploadTask = storageRef.child('images/' + fileList[i].name).put(fileList[i])
    uploadTask.on('state_changed', function(snapshot) {
      }, function(error) {
      }, function() {
        var downloadURL = uploadTask.snapshot.downloadURL;
        callback(uploadTask.snapshot.downloadURL)
    })
  }
}
