import fireabse from "./firebase"
import "firebase/compat/storage"

const storage = fireabse.storage()

async function handleFirebaseUpload(path, target) {
   const date = new Date()
   const fileName = `${date.getTime()}_${target.name}`

   return new Promise(function (resolve, reject) {
      const uploadTask = storage.ref(`${path}/${fileName}`).put(target)

      uploadTask.on(
         "state_changed",
         function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            // console.log("Upload is " + progress + "% done")
            switch (snapshot.state) {
               case fireabse.storage.TaskState.PAUSED:
                //   console.log("Upload is paused")
                  break
               case fireabse.storage.TaskState.RUNNING:
                //   console.log("Upload is running")
                  break
                default:
                    break
            }
         },
         function (error) {
            reject("FAILURE-UPLOAD")
            // console.log(`upload fail: ${error}`)
         },
         function () {
            resolve("SUCCESS-UPLOAD")
         },
      )
   })
}

export default handleFirebaseUpload