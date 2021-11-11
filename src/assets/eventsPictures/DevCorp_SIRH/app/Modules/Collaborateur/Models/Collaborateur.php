<?php

namespace App\Modules\Collaborateur\Models;

use App\Modules\DemandeDocAdmin\Models\DemandeDocAdmin;
use App\Modules\Utilisateur\Models\Utilisateur;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collaborateur extends Model
{
    use HasFactory;

    protected $guarded=["id"];
    public function documentPersonnels()
    {
        return $this->hasMany(DocumentPersonnel::class);
    }
    public function fonction(){
        return $this->belongsTo(Fonction::class);
    }
    public function utilisateur(){
        return $this->hasOne(Utilisateur::class);
    }
    public function demandeDocAdmins(){
        return $this->hasMany(DemandeDocAdmin::class);
    }

}
