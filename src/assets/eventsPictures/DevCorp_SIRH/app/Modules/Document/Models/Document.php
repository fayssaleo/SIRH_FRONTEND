<?php

namespace App\Modules\Document\Models;

use App\Modules\Categorie\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    public function categories(){
        return $this->morphToMany(Categorie::class, 'categorable');
    }
}
