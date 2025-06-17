import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { historyApi } from '../api/historyApi';
import { patientsApi } from '../api/patientsApi';
import './DialysisProcess.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Patient } from '../types';

interface VitalSigns {
  bloodPressure: string;
  heartRate: number | string;
  temperature: number | string;
  weight: number | string;
}

interface LabResults {
  urea: number | string;
  creatinine: number | string;
  potassium: number | string;
  sodium: number | string;
}

interface TreatmentParameters {
  dialyzer: string;
  bloodFlow: number | string;
  dialysateFlow: number | string;
  ultrafiltration: number | string;
}

interface DialysisProcessFormValues {
  patientId: string;
  startTime: string;
  endTime: string;
  vitalSigns: {
    preDialysis: VitalSigns;
    postDialysis: VitalSigns;
  };
  labResults: LabResults;
  treatmentParameters: TreatmentParameters;
  nursingNotes: string;
}

const validationSchema = Yup.object({
  patientId: Yup.string().required('Patient selection is required'),
  startTime: Yup.string().required('Start time is required'),
  endTime: Yup.string().required('End time is required'),
  vitalSigns: Yup.object({
    preDialysis: Yup.object({
      bloodPressure: Yup.string().required('Pre-dialysis blood pressure is required'),
      heartRate: Yup.number().required('Pre-dialysis heart rate is required'),
      temperature: Yup.number().required('Pre-dialysis temperature is required'),
      weight: Yup.number().required('Pre-dialysis weight is required')
    }),
    postDialysis: Yup.object({
      bloodPressure: Yup.string().required('Post-dialysis blood pressure is required'),
      heartRate: Yup.number().required('Post-dialysis heart rate is required'),
      temperature: Yup.number().required('Post-dialysis temperature is required'),
      weight: Yup.number().required('Post-dialysis weight is required')
    })
  }),
  labResults: Yup.object({
    urea: Yup.number().required('Urea level is required'),
    creatinine: Yup.number().required('Creatinine level is required'),
    potassium: Yup.number().required('Potassium level is required'),
    sodium: Yup.number().required('Sodium level is required')
  }),
  treatmentParameters: Yup.object({
    dialyzer: Yup.string().required('Dialyzer is required'),
    bloodFlow: Yup.number().required('Blood flow is required'),
    dialysateFlow: Yup.number().required('Dialysate flow is required'),
    ultrafiltration: Yup.number().required('Ultrafiltration is required')
  }),
  nursingNotes: Yup.string().required('Nursing notes are required')
});

const DialysisProcess: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await patientsApi.getAllPatients();
        setPatients(patientsData);
      } catch (err) {
        setError('Failed to load patients. Please try again.');
      }
    };
    fetchPatients();
  }, []);

  const initialValues: DialysisProcessFormValues = {
    patientId: '',
    startTime: '',
    endTime: '',
    vitalSigns: {
      preDialysis: {
        bloodPressure: '',
        heartRate: '',
        temperature: '',
        weight: ''
      },
      postDialysis: {
        bloodPressure: '',
        heartRate: '',
        temperature: '',
        weight: ''
      }
    },
    labResults: {
      urea: '',
      creatinine: '',
      potassium: '',
      sodium: ''
    },
    treatmentParameters: {
      dialyzer: '',
      bloodFlow: '',
      dialysateFlow: '',
      ultrafiltration: ''
    },
    nursingNotes: ''
  };

  const handleSubmit = async (values: DialysisProcessFormValues, { resetForm }: FormikHelpers<DialysisProcessFormValues>) => {
    try {
      const patient = patients.find(p => String(p.id) === String(values.patientId));
      const newHistory = {
        ...values,
        patientId: String(values.patientId),
        patientName: patient ? `${patient.firstName} ${patient.lastName}` : '',
        date: new Date().toISOString().split('T')[0]
      };
      await historyApi.addHistory(newHistory);
      setSuccess(true);
      setError('');
      resetForm();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.log('Failed to record dialysis session', err);
      setError('Failed to record dialysis session. Please try again.');
    }
  };

  return (
    <>
    <Container fluid className="dialysis-process-container py-3">
    <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="home-title">Start Dialysis Process</h2>

              {success && (
                <div className="alert alert-success">
                  Dialysis session recorded successfully!
                </div>
              )}

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* ...form fields as in the original file... */}
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
    </>
  );
};

export default DialysisProcess; 