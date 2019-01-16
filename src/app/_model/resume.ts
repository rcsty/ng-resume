import { Profile } from './profile';
import { Experiences } from './experiences';
import { Abilities } from './abilities';
import { Projects } from './projects';
import { Contact } from './contact';

export class Resume {
  title: string;
  profile: Profile;
  experiences: Experiences;
  abilities: Abilities;
  projects: Projects;
  contact: Contact;
}
