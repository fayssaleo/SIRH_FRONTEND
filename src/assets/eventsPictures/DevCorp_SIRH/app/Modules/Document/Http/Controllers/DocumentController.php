<?php

namespace App\Modules\Document\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Categorie\Models\Categorie;
use App\Modules\Document\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DocumentController extends Controller
{

    public function create(Request $request){
        $validator=Validator::make($request->all(),[
            "libelle"=>'string|required',
            "filename"=>'string|required',
            "createdBy"=>'string|required',
            "updatedBy"=>'string',
            "categories"=>'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        if(count($request->categories) == 0){
            return response()->json($validator->errors(), 422);
        }
        $docuemnt=new Document();
        $docuemnt->libelle=$request->libelle;
        $docuemnt->filename=$request->filename;
        $docuemnt->createdBy=$request->createdBy;
        $docuemnt->updatedBy=$request->updatedBy;
        $docuemnt->save();
        foreach ($request->categories as $categorie ) {
          //  dd($categorie);
               $categorieToSave=Categorie::find($categorie["id"]);

               if($categorieToSave==null){
                   $categorieToSave=new Categorie();
                   $categorieToSave->libelle=$categorie["libelle"];
                   $categorieToSave->actif=$categorie["actif"];
                   $categorieToSave->type=$categorie["type"];
                   $categorieToSave->createdBy=$categorie["createdBy"];
                   $categorieToSave->save();
               }
               $docuemnt->categories()->save($categorieToSave);
           }

        return $docuemnt;

    }
}
