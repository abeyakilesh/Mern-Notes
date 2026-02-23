
//fetch get
export function getAllNotes(req,res)
{
    res.status(200).send("You Fetched 1010 Notes");
}

//create post
export function createNote(req,res)
{
    res.status(201).send("You created 1 Note");
}

//update put
export function updateNote(req,res){
    res.status(200).send("You updated 1 note");
}

//delete delete
export function deleteNote(req,res){
    res.status(200).send("Deleted 1 note");
}