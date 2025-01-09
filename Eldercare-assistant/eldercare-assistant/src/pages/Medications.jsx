import React, { useState, useEffect } from 'react';
import { Plus, Check, X } from 'lucide-react';

function Medications() {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({ name: '', time: '' });

  useEffect(() => {
    setMedications([
      { id: 1, name: 'Aspirin', time: '08:00', taken: false },
      { id: 2, name: 'Vitamin D', time: '12:00', taken: true },
      { id: 3, name: 'Calcium', time: '18:00', taken: false },
    ]);
  }, []);

  const addMedication = (e) => {
    e.preventDefault();
    const id = medications.length + 1;
    setMedications([...medications, { ...newMedication, id, taken: false }]);
    setNewMedication({ name: '', time: '' });
  };

  const toggleMedication = (id) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ));
  };

  const deleteMedication = (id) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-sage-800">Medication Reminders</h1>
      <form onSubmit={addMedication} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Medication name"
            value={newMedication.name}
            onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
            className="flex-grow p-2 border border-sage-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
            required
          />
          <input
            type="time"
            value={newMedication.time}
            onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
            className="p-2 border border-sage-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-sage-600 text-white py-2 px-4 rounded-md hover:bg-sage-700 transition-colors flex items-center justify-center">
          <Plus size={20} className="mr-2" />
          Add Medication
        </button>
      </form>
      <ul className="space-y-4">
        {medications.map((med) => (
          <li key={med.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <span className="text-xl font-semibold">{med.name} - {med.time}</span>
            <div className="space-x-2">
              <button 
                onClick={() => toggleMedication(med.id)}
                className={`py-2 px-4 rounded-md transition-colors ${
                  med.taken 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                }`}
              >
                {med.taken ? <Check size={20} /> : 'Take'}
              </button>
              <button 
                onClick={() => deleteMedication(med.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Medications;

