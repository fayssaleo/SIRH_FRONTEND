<?php

namespace App\Modules\DemandeConge\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeConge extends Model
{
    use HasFactory;
    protected $guarded=["id"];
    public function demandeConges(){
        return $this->hasMany(DemandeConge::class);
    }
}
