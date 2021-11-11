<?php

namespace App\Enums;

use DevcorpIt\ResponseCode\Http\Enum\eBaseResponseCode;

abstract class eResponseCode extends eBaseResponseCode
{

    /*
     * examples :
     * de 00 à 04 sont réservés pour les actions suivants, tout autre action nécessite un code supérieur à 04
     * const S_LISTED_200_00 = ['S200_00' => 'Sheets succèsfully listed']; 00 -> pour lister
     * const S_GET_200_01 = ['S200_01' => 'Sheet returned succèssfully'];  01 -> retourner un element
     * const S_GET_200_01x1 = ['S200_01x1' => 'Sheet returned succèssfully']; 01xN -> attention à utiliser uniquement si pour le même code on a des variantes, le même example peut être appliquer sur les autres codes
     * const S_CREATED_200_02 = ['S200_02' => 'Sheet succèsfully created'];02 -> créer element
     * const S_UPDATED_200_03 = ['S200_03' => 'Sheet succèsfully updated'];03 -> mettre à jour
     * const S_DELETED_200_04 = ['S200_04' => 'Sheet succèsfully deleted'];04 -> supprimer un element
     *
     */

    // Utilisateur
    const USER_PROFILE_INFO_200_01 = ['U200_01' => 'Logged in Informations'];
    const USER_LOGGED_IN_200_02 = ['U200_02' => 'Connexion réussie'];
    const USER_LOGGED_OUT_200_03 = ['U200_03' => 'Déconnexion réussie'];
    const USER_LOGGED_VALIDATE_EMAIL_200_04 = ['U200_04' => 'Veuillez valider votre email'];
    const USER_LOGGED_401_01 = ['U401_01' => 'Email ou Mot de passe incorrect'];
    const USER_LOGGED_401_02 = ['U401_02' => 'Token Invalid'];
    const USER_LOGGED_INFOS_NOT_ACCEPTED_406_00=["U406_00"=>"Login informatios non acceptable"];
    const USER_LOGGED_REGISTERED_200_05=["U406_05"=>"L'utilisateur a été enregistrer avec succés"];


    // Departelent
    const DEP_LISTED_200_00=["DEP200_00"=>"Departements listées avec succés"];
    const DEP_GET_200_01=["DEP200_01"=>"Departement renvoyé avec succés"];
    const DEP_STORED_200_02=["DEP200_02"=>"Departement enregistré avec succés"];
    const DEP_UPDATED_200_03=["DEP200_03"=>"Departement modifié avec succés"];
    const DEP_DELETED_200_04=["DEP200_04"=>"Departement supprimé avec succés"];
    const DEP_FONCTS_LIST_200_05=["DEP200_05"=>"Departement fonctions listées avec succés"];
    const DEP_NOT_FOUND_404_00=["DEP404_00"=>"Departement introuvable"];
    const DEP_NOT_ACCEPTED_406_00=["DEP406_00"=>"Departement informatios non acceptable"];

    // Fonction
    const FONCT_LISTED_200_00=["FONCT200_00"=>"Fonctions listées avec succés"];
    const FONCT_GET_200_01=["FONCT200_01"=>"Fonctions renvoyé avec succés"];
    const FONCT_STORED_200_02=["FONCT200_02"=>"Fonctions enregistré avec succés"];
    const FONCT_UPDATED_200_03=["FONCT200_03"=>"Fonctions modifié avec succés"];
    const FONCT_DELETED_200_04=["FONCT200_04"=>"Fonctions supprimé avec succés"];
    const FONCT_DEPS_LIST_200_05=["FONCT200_05"=>"Fonctions departement listées avec succés"];
    const FONCT_NOT_FOUND_404_00=["FONCT404_00"=>"Fonctions introuvable"];
    const FONCT_NOT_ACCEPTED_406_00=["FONCT406_00"=>"Fonctions informatios non acceptable"];
    const FONCT_HAVE_COLL_406_01=["FONCT406_01"=>"cette fonction est liée à un ou plusieurs collaborateurs"];

    // Collaborateur
    const COLL_LISTED_200_00=["COLL200_00"=>"Collaborateurs listées avec succés"];
    const COLL_GET_200_01=["COLL200_01"=>"Collaborateurs renvoyé avec succés"];
    const COLL_STORED_200_02=["COLL200_02"=>"Collaborateurs enregistré avec succés"];
    const COLL_UPDATED_200_03=["COLL200_03"=>"Collaborateurs modifié avec succés"];
    const COLL_DELETED_200_04=["COLL200_04"=>"Collaborateurs supprimé avec succés"];
    const COLL_DISABLED_200_05=["COLL200_05"=>"Collaborateurs désactivé avec succés"];
    const COLL_NOT_FOUND_404_00=["COLL404_00"=>"Collaborateurs introuvable"];
    const COLL_NOT_ACCEPTED_406_00=["COLL406_00"=>"Collaborateurs informatios non acceptable"];
    const COLL_NOT_ACCEPTED_407_00=["COLL406_00"=>"lien du Dossier Photos est bien envoyé"];

    // Type_Conges
    const TCONG_LISTED_200_00=["TCONG200_00"=>"Type congés listées avec succés"];
    const TCONG_GET_200_01=["TCONG200_01"=>"Type congés renvoyé avec succés"];
    const TCONG_STORED_200_02=["TCONG200_02"=>"Type congés enregistré avec succés"];
    const TCONG_UPDATED_200_03=["TCONG200_03"=>"Type congés modifié avec succés"];
    const TCONG_DISABLED_200_04=["TCONG200_04"=>"Type congés désactivé avec succés"];
    const TCONG_ENABLED_200_04=["TCONG200_04"=>"Type congés activé avec succés"];
    const TCONG_DISABLED_200_05=["TCONG200_05"=>"Type congés désactivé avec succés"];
    const TCONG_NOT_FOUND_404_00=["TCONG404_00"=>"Type congés introuvable"];
    const TCONG_NOT_ACCEPTED_406_00=["TCONG406_00"=>"Type congés informatios non acceptable"];

    // DemandeConge
    const DCONG_LISTED_200_00=["DCONG200_00"=>"Demande de congé listées avec succés"];
    const DCONG_GET_200_01=["DCONG200_01"=>"Demande de congé renvoyé avec succés"];
    const DCONG_STORED_200_02=["DCONG200_02"=>"Demande de congé enregistré avec succés"];
    const DCONG_UPDATED_200_03=["DCONG200_03"=>"Demande de congé modifié avec succés"];
    const DCONG_DISABLED_200_05=["DCONG200_05"=>"Demande de congé désactivé avec succés"];
    const DCONG_NOT_FOUND_404_00=["DCONG404_00"=>"Demande de congé introuvable"];
    const DCONG_NOT_ACCEPTED_406_00=["DCONG06_00"=>"Demande de congé informatios non acceptable"];
    const DCONG_DELETED_200_04=["DCONG200_04"=>"Demande de congé supprimé avec succés"];





}
