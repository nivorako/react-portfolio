# Composant Button

Un composant bouton réutilisable et flexible pour l'ensemble de l'application.

## Import

```tsx
import Button from "../components/Button";
```

## Propriétés

| Propriété | Type                                 | Par défaut  | Description                                      |
| --------- | ------------------------------------ | ----------- | ------------------------------------------------ |
| variant   | "primary" \| "secondary" \| "submit" | "secondary" | Variante de style du bouton                      |
| fullWidth | boolean                              | false       | Étend le bouton sur toute la largeur (max 300px) |
| as        | any                                  | -           | Permet de transformer le bouton en autre élément |
| to        | string                               | -           | URL de destination (utilisé avec `as={Link}`)    |
| ...props  | ButtonHTMLAttributes                 | -           | Toutes les propriétés HTML standard d'un bouton  |

## Variantes

### Secondary (par défaut)

Bouton avec fond secondaire, idéal pour les actions standards.

```tsx
<Button onClick={handleClick}>Cliquez ici</Button>
```

### Primary

Bouton avec fond primaire, pour les actions importantes.

```tsx
<Button variant="primary" onClick={handleClick}>
    Action principale
</Button>
```

### Submit

Bouton pour les formulaires, avec styles optimisés pour la soumission.

```tsx
<Button variant="submit" type="submit" fullWidth>
    Envoyer
</Button>
```

## Exemples d'utilisation

### Bouton standard

```tsx
<Button onClick={scrollToSection}>Voir mes projets</Button>
```

### Bouton avec lien (React Router)

```tsx
import { Link } from "react-router-dom";

<Button as={Link} to="/contact">
    Me contacter
</Button>;
```

### Bouton de formulaire pleine largeur

```tsx
<Button type="submit" variant="submit" fullWidth disabled={isSubmitting}>
    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
</Button>
```

### Bouton désactivé

```tsx
<Button disabled>Bouton désactivé</Button>
```

## Styles

Le composant utilise les variables CSS suivantes :

- `--secondary` : Couleur de fond par défaut
- `--text` : Couleur du texte
- `--primary` : Couleur primaire pour les variantes

### Effets

- **Hover** : Translation vers le haut et ajout d'une ombre
- **Active** : Effet de réduction (scale 0.98)
- **Disabled** : Opacité réduite et curseur "not-allowed"

## Fichiers utilisant ce composant

- `src/pages/Home.tsx` - Bouton "Voir mes projets"
- `src/pages/NewContact.tsx` - Bouton de soumission du formulaire
