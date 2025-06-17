import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Database file path
const dbPath = path.join(__dirname, '../db/db.json');

// Helper function to read database
const readDatabase = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { patients: [], appointments: [], billing: [], history: [] };
  }
};

// Helper function to write database
const writeDatabase = (data: any) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing database:', error);
    return false;
  }
};

// Test endpoint
router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

// Patients endpoints
router.get('/patients', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    res.json(db.patients || []);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

router.post('/patients', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    const patient = {
      ...req.body,
      id: Date.now().toString()
    };
    
    db.patients.push(patient);
    writeDatabase(db);
    
    res.status(201).json(patient);
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).json({ error: 'Failed to add patient' });
  }
});

// Billing endpoints
router.get('/billing', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    res.json(db.billing || []);
  } catch (error) {
    console.error('Error fetching billing:', error);
    res.status(500).json({ error: 'Failed to fetch billing' });
  }
});

router.post('/billing', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    const bill = {
      ...req.body,
      id: Date.now().toString()
    };
    
    db.billing.push(bill);
    writeDatabase(db);
    
    res.status(201).json(bill);
  } catch (error) {
    console.error('Error adding bill:', error);
    res.status(500).json({ error: 'Failed to add bill' });
  }
});

// History endpoints
router.get('/history', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    res.json(db.history || []);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

router.post('/history', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    const history = {
      ...req.body,
      id: Date.now().toString()
    };
    
    db.history.push(history);
    writeDatabase(db);
    
    res.status(201).json(history);
  } catch (error) {
    console.error('Error adding history:', error);
    res.status(500).json({ error: 'Failed to add history' });
  }
});

router.delete('/history/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = readDatabase();
    
    const index = db.history.findIndex((h: any) => h.id === id);
    if (index !== -1) {
      db.history.splice(index, 1);
      writeDatabase(db);
      res.json({ message: `History record ${id} deleted successfully` });
    } else {
      res.status(404).json({ error: 'History record not found' });
    }
  } catch (error) {
    console.error('Error deleting history:', error);
    res.status(500).json({ error: 'Failed to delete history' });
  }
});

// Schedule endpoints (appointments)
router.get('/schedule', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    res.json(db.appointments || []);
  } catch (error) {
    console.error('Error fetching schedule:', error);
    res.status(500).json({ error: 'Failed to fetch schedule' });
  }
});

// Add the /schedules endpoint (plural) for frontend compatibility
router.get('/schedules', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    res.json(db.appointments || []);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ error: 'Failed to fetch schedules' });
  }
});

router.post('/schedule', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    const schedule = {
      ...req.body,
      id: Date.now().toString()
    };
    
    db.appointments.push(schedule);
    writeDatabase(db);
    
    res.status(201).json(schedule);
  } catch (error) {
    console.error('Error adding schedule:', error);
    res.status(500).json({ error: 'Failed to add schedule' });
  }
});

// Add the /schedules POST endpoint (plural) for frontend compatibility
router.post('/schedules', (req: Request, res: Response) => {
  try {
    const db = readDatabase();
    const schedule = {
      ...req.body,
      id: Date.now().toString()
    };
    
    db.appointments.push(schedule);
    writeDatabase(db);
    
    res.status(201).json(schedule);
  } catch (error) {
    console.error('Error adding schedule:', error);
    res.status(500).json({ error: 'Failed to add schedule' });
  }
});

// Staff endpoint
router.get('/staff', (req: Request, res: Response) => {
  try {
    // Mock staff data - you can move this to db.json later
    const staffData = {
      technicians: [
        "Dr. Smith",
        "Dr. Brown", 
        "Dr. Wilson",
        "Dr. Davis",
        "Dr. Miller"
      ],
      doctors: [
        "Dr. Johnson",
        "Dr. Williams",
        "Dr. Davis",
        "Dr. Miller",
        "Dr. Garcia"
      ],
      units: [
        "Unit A",
        "Unit B", 
        "Unit C",
        "Unit D"
      ]
    };
    res.json(staffData);
  } catch (error) {
    console.error('Error fetching staff:', error);
    res.status(500).json({ error: 'Failed to fetch staff' });
  }
});

export default router; 