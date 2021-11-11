<?php

namespace App\Modules\Actualite\Models;

use App\Modules\Categorie\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actualite extends Model
{
    use HasFactory;
    protected $guarded = ["id"];
    public function categories(){
        return $this->morphToMany(Categorie::class, 'categorable');
    }
}
