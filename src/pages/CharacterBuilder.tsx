import React, { useState } from 'react';

interface Background {
  name: string;
  description: string;
  features: string[];
  proficiencies: {
    skills: string[];
    languages?: string[];
    tools?: string[];
  };
}

interface CharacterForm {
  name: string;
  race: string;
  class: string;
  level: number;
  background: string;
  alignment: string;
  experience: number;
  abilityScores: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  abilityScoreMethod: 'standard' | 'point-buy' | 'custom';
  equipment: {
    weapons: string[];
    armor: string[];
    adventuringGear: string[];
    tools: string[];
  };
  spells: {
    cantrips: string[];
    level1: string[];
    level2: string[];
    level3: string[];
    level4: string[];
    level5: string[];
    level6: string[];
    level7: string[];
    level8: string[];
    level9: string[];
  };
}

const CharacterBuilder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CharacterForm>({
    name: '',
    race: '',
    class: '',
    level: 1,
    background: '',
    alignment: '',
    experience: 0,
    abilityScores: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    abilityScoreMethod: 'standard',
    equipment: {
      weapons: [],
      armor: [],
      adventuringGear: [],
      tools: [],
    },
    spells: {
      cantrips: [],
      level1: [],
      level2: [],
      level3: [],
      level4: [],
      level5: [],
      level6: [],
      level7: [],
      level8: [],
      level9: [],
    },
  });
  const [showCharacterSheet, setShowCharacterSheet] = useState(false);

  const races = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];
  const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
  const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
  
  const backgrounds: { [key: string]: Background } = {
    'Acolyte': {
      name: 'Acolyte',
      description: 'You have spent your life in service to a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.',
      features: ['Shelter of the Faithful'],
      proficiencies: {
        skills: ['Insight', 'Religion'],
        languages: ['Two of your choice']
      }
    },
    'Criminal': {
      name: 'Criminal',
      description: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization.",
      features: ['Criminal Contact'],
      proficiencies: {
        skills: ['Deception', 'Stealth'],
        tools: ['One type of gaming set', 'Thieves\' tools']
      }
    },
    'Folk Hero': {
      name: 'Folk Hero',
      description: 'You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.',
      features: ['Rustic Hospitality'],
      proficiencies: {
        skills: ['Animal Handling', 'Survival'],
        tools: ['One type of artisan\'s tools', 'Land vehicles']
      }
    },
    'Noble': {
      name: 'Noble',
      description: 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.',
      features: ['Position of Privilege'],
      proficiencies: {
        skills: ['History', 'Persuasion'],
        languages: ['One of your choice'],
        tools: ['One type of gaming set']
      }
    },
    'Sage': {
      name: 'Sage',
      description: 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you.',
      features: ['Researcher'],
      proficiencies: {
        skills: ['Arcana', 'History'],
        languages: ['Two of your choice']
      }
    },
    'Soldier': {
      name: 'Soldier',
      description: 'War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield.',
      features: ['Military Rank'],
      proficiencies: {
        skills: ['Athletics', 'Intimidation'],
        tools: ['One type of gaming set', 'Land vehicles']
      }
    }
  };

  const equipmentOptions = {
    weapons: [
      'Longsword', 'Shortsword', 'Greatsword', 'Battleaxe', 'Handaxe', 'Light Crossbow',
      'Heavy Crossbow', 'Longbow', 'Shortbow', 'Dagger', 'Quarterstaff', 'Mace'
    ],
    armor: [
      'Leather Armor', 'Studded Leather Armor', 'Hide Armor', 'Chain Shirt',
      'Scale Mail', 'Breastplate', 'Half Plate', 'Ring Mail', 'Chain Mail',
      'Splint', 'Plate'
    ],
    adventuringGear: [
      'Backpack', 'Bedroll', 'Mess Kit', 'Tinderbox', 'Torch (10)', 'Rations (10 days)',
      'Waterskin', 'Hempen Rope (50 feet)', 'Pitons (10)', 'Grappling Hook',
      'Hammer', 'Crowbar', 'Lantern', 'Oil (5 flasks)', 'Parchment (5 sheets)',
      'Ink', 'Quill', 'Sealing Wax', 'Soap', 'Shovel', 'Two-Person Tent'
    ],
    tools: [
      'Thieves\' Tools', 'Disguise Kit', 'Forgery Kit', 'Herbalism Kit',
      'Navigator\'s Tools', 'Poisoner\'s Kit', 'Alchemist\'s Supplies',
      'Brewer\'s Supplies', 'Calligrapher\'s Supplies', 'Carpenter\'s Tools',
      'Cartographer\'s Tools', 'Cobbler\'s Tools', 'Cook\'s Utensils',
      'Glassblower\'s Tools', 'Jeweler\'s Tools', 'Leatherworker\'s Tools',
      'Mason\'s Tools', 'Painter\'s Supplies', 'Potter\'s Tools',
      'Smith\'s Tools', 'Tinker\'s Tools', 'Weaver\'s Tools',
      'Woodcarver\'s Tools'
    ]
  };

  const spellOptions = {
    cantrips: [
      'Acid Splash', 'Blade Ward', 'Chill Touch', 'Dancing Lights', 'Fire Bolt',
      'Friends', 'Guidance', 'Light', 'Mage Hand', 'Mending', 'Message',
      'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Ray of Frost',
      'Resistance', 'Sacred Flame', 'Shillelagh', 'Shocking Grasp', 'Spare the Dying',
      'Thaumaturgy', 'True Strike', 'Vicious Mockery'
    ],
    level1: [
      'Alarm', 'Animal Friendship', 'Armor of Agathys', 'Arms of Hadar',
      'Bane', 'Bless', 'Burning Hands', 'Charm Person', 'Command',
      'Comprehend Languages', 'Create or Destroy Water', 'Cure Wounds',
      'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease',
      'Disguise Self', 'Divine Favor', 'Entangle', 'Expeditious Retreat',
      'Faerie Fire', 'False Life', 'Feather Fall', 'Find Familiar',
      'Fog Cloud', 'Goodberry', 'Grease', 'Guiding Bolt', 'Hail of Thorns',
      'Healing Word', 'Hellish Rebuke', 'Heroism', 'Hex', 'Hunter\'s Mark',
      'Identify', 'Illusory Script', 'Inflict Wounds', 'Jump', 'Longstrider',
      'Mage Armor', 'Magic Missile', 'Protection from Evil and Good',
      'Purify Food and Drink', 'Sanctuary', 'Shield', 'Shield of Faith',
      'Silent Image', 'Sleep', 'Speak with Animals', 'Tasha\'s Hideous Laughter',
      'Tenser\'s Floating Disk', 'Thunderwave', 'Unseen Servant', 'Witch Bolt'
    ],
    // Add more spell levels as needed...
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCharacterSheet(true);
  };

  const selectedBackground = formData.background ? backgrounds[formData.background] : null;

  const calculateModifier = (score: number): number => {
    return Math.floor((score - 10) / 2);
  };

  const handleAbilityScoreChange = (ability: keyof typeof formData.abilityScores, value: number) => {
    setFormData(prev => ({
      ...prev,
      abilityScores: {
        ...prev.abilityScores,
        [ability]: Math.max(3, Math.min(20, value))
      }
    }));
  };

  const handleEquipmentChange = (category: keyof typeof equipmentOptions, item: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      equipment: {
        ...prev.equipment,
        [category]: checked
          ? [...prev.equipment[category], item]
          : prev.equipment[category].filter(i => i !== item)
      }
    }));
  };

  const handleSpellChange = (level: keyof typeof formData.spells, spell: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      spells: {
        ...prev.spells,
        [level]: checked
          ? [...prev.spells[level], spell]
          : prev.spells[level].filter(s => s !== spell)
      }
    }));
  };

  if (showCharacterSheet) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-dnd text-white bg-dnd-red p-4 rounded-lg">Character Sheet</h1>
          <button
            onClick={() => setShowCharacterSheet(false)}
            className="px-6 py-2 bg-dnd-red text-white rounded-lg hover:bg-red-700 transition-colors font-sans"
          >
            Create Another
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-dnd text-dnd-red mb-4">Basic Information</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Name:</span> {formData.name}</p>
                <p><span className="font-medium">Race:</span> {formData.race}</p>
                <p><span className="font-medium">Class:</span> {formData.class}</p>
                <p><span className="font-medium">Level:</span> {formData.level}</p>
                <p><span className="font-medium">Background:</span> {formData.background}</p>
                <p><span className="font-medium">Alignment:</span> {formData.alignment}</p>
                <p><span className="font-medium">Experience Points:</span> {formData.experience}</p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-dnd text-dnd-red mb-4">Ability Scores</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(formData.abilityScores).map(([ability, score]) => (
                  <div key={ability} className="bg-gray-200 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-dnd-red capitalize mb-2">{ability}</h3>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-700">{score}</div>
                      <div className="text-sm text-gray-600">
                        Modifier: {calculateModifier(score) >= 0 ? '+' : ''}{calculateModifier(score)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedBackground && (
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-dnd text-dnd-red mb-4">Background Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-dnd-red mb-2">Description</h3>
                    <p className="text-gray-700">{selectedBackground.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-dnd-red mb-2">Features</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {selectedBackground.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-dnd-red mb-2">Proficiencies</h3>
                    <div className="text-gray-700">
                      <p><span className="font-medium">Skills:</span> {selectedBackground.proficiencies.skills.join(', ')}</p>
                      {selectedBackground.proficiencies.languages && (
                        <p><span className="font-medium">Languages:</span> {selectedBackground.proficiencies.languages.join(', ')}</p>
                      )}
                      {selectedBackground.proficiencies.tools && (
                        <p><span className="font-medium">Tools:</span> {selectedBackground.proficiencies.tools.join(', ')}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-dnd text-dnd-red mb-4">Equipment</h2>
              <div className="space-y-4">
                {Object.entries(formData.equipment).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-medium text-dnd-red mb-2 capitalize">{category}</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-dnd text-dnd-red mb-4">Spells</h2>
              <div className="space-y-4">
                {Object.entries(formData.spells).map(([level, spells]) => (
                  spells.length > 0 && (
                    <div key={level}>
                      <h3 className="text-lg font-medium text-dnd-red mb-2 capitalize">{level}</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        {spells.map((spell, index) => (
                          <li key={index}>{spell}</li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-dnd text-dnd-red mb-4">Progression</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Current Level:</span> {formData.level}</p>
                <p><span className="font-medium">Current XP:</span> {formData.experience}</p>
                <p><span className="font-medium">XP to Next Level:</span> {formData.level * 1000 - formData.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <h1 className="text-4xl font-dnd text-white bg-dnd-red p-4 rounded-lg mb-8">Create Your Character</h1>
      
      <div className="space-y-8">
        {step === 1 && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-dnd text-dnd-red mb-6">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-sans">Character Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg font-sans text-black focus:ring-2 focus:ring-dnd-red focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-sans">Race</label>
                  <select
                    name="race"
                    value={formData.race}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg font-sans text-black focus:ring-2 focus:ring-dnd-red focus:border-transparent"
                  >
                    <option value="">Select a race</option>
                    {races.map(race => (
                      <option key={race} value={race}>{race}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-sans">Class</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg font-sans text-black focus:ring-2 focus:ring-dnd-red focus:border-transparent"
                  >
                    <option value="">Select a class</option>
                    {classes.map(cls => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-sans">Level</label>
                  <input
                    type="number"
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    min="1"
                    max="20"
                    className="w-full p-3 border border-gray-300 rounded-lg font-sans text-black focus:ring-2 focus:ring-dnd-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-sans">Alignment</label>
                  <select
                    name="alignment"
                    value={formData.alignment}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg font-sans text-black focus:ring-2 focus:ring-dnd-red focus:border-transparent"
                  >
                    <option value="">Select an alignment</option>
                    {alignments.map(alignment => (
                      <option key={alignment} value={alignment}>{alignment}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-dnd text-dnd-red mb-6">Character Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-sans">Background</label>
                <select
                  name="background"
                  value={formData.background}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg font-sans text-black focus:ring-2 focus:ring-dnd-red focus:border-transparent"
                >
                  <option value="">Select a background</option>
                  {Object.keys(backgrounds).map(background => (
                    <option key={background} value={background}>{background}</option>
                  ))}
                </select>
              </div>
              {selectedBackground && (
                <div className="mt-4 p-4 bg-gray-200 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-dnd text-dnd-red mb-2">{selectedBackground.name}</h3>
                  <p className="text-gray-700 mb-4">{selectedBackground.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-dnd-red">Features:</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {selectedBackground.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-dnd-red">Proficiencies:</h4>
                      <div className="text-gray-700">
                        <p><span className="font-medium">Skills:</span> {selectedBackground.proficiencies.skills.join(', ')}</p>
                        {selectedBackground.proficiencies.languages && (
                          <p><span className="font-medium">Languages:</span> {selectedBackground.proficiencies.languages.join(', ')}</p>
                        )}
                        {selectedBackground.proficiencies.tools && (
                          <p><span className="font-medium">Tools:</span> {selectedBackground.proficiencies.tools.join(', ')}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-dnd text-dnd-red mb-6">Spells</h2>
            <div className="space-y-6">
              {Object.entries(spellOptions).map(([level, spells]) => (
                <div key={level}>
                  <h3 className="text-lg font-medium text-dnd-red mb-3 capitalize">{level}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {spells.map(spell => (
                      <label key={spell} className="flex items-center space-x-2 text-gray-700">
                        <input
                          type="checkbox"
                          checked={formData.spells[level as keyof typeof formData.spells].includes(spell)}
                          onChange={(e) => handleSpellChange(level as keyof typeof formData.spells, spell, e.target.checked)}
                          className="rounded border-gray-300 text-dnd-red focus:ring-dnd-red"
                        />
                        <span>{spell}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-sans"
            >
              Previous Step
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-dnd-red text-white rounded-lg hover:bg-red-700 transition-colors font-sans ml-auto"
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-dnd-red text-white rounded-lg hover:bg-red-700 transition-colors font-sans ml-auto"
            >
              Create Character
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterBuilder; 