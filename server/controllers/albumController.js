import data from '../utils/data.js'

const getPhotos =  (req,res) => {
    const response =  data.filter((data)=>data.albumId === parseInt(req.params.albumId))
    return (response.length > 0)? res.send({status:200,response}): res.send({status:404,message:'No photos found'})
}

export default getPhotos