<?php

namespace App\Modules\DemandeConge\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemandeConge extends Model
{
    use HasFactory;
    public function typeConge(){
        return $this->belongsTo(TypeConge::class);
    }
}
