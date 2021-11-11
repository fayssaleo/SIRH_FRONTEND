<?php

namespace App\Modules\Evenement\Models;

use App\Modules\Categorie\Models\Categorie;
use App\Modules\Collaborateur\Models\Collaborateur;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evenement extends Model
{
    use HasFactory;
    public function categories(){
        return $this->morphToMany(Categorie::class, 'categorable');
    }
    public function collaborateur(){
        return $this->belongsToMany(Collaborateur::class)
            ->withTimestamps()
            ->withPivot(["satut","date"]);
    }
}
