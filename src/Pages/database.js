import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import file1 from '../pdf/Growth inhibition of the 9L glioma using polymers to release heparin and.pdf'
import file2 from '../pdf/Neurological Surgery.pdf'
import file3 from '../pdf/The glucose transporter and blood-brain barrier of human brain tumors.pdf'
import file4 from '../pdf/Polymers to Treat BRain Tumors.pdf'
import file5 from '../pdf/Interstitial chemotherapy with drug polymer implants for the treatment of recurrent gliomas..pdf'
import file6 from '../pdf/Solitary Isolated Metastasis.pdf'
import file7 from '../pdf/Angiogenesis Inhibition by Minocycline.pdf'
import file8 from '../pdf/The Anatomical Record - January 1991 - Dugan - A new technique for explantation and in vitro cultivation of chicken embryos.pdf'
import file9 from '../pdf/Polymeric controlled release.pdf'
import file10 from '../pdf/Multidrug resistance.pdf'
import file11 from '../pdf/Intersttial delivery of dexamethasone.pdf'
import file12 from '../pdf/supratentorial_low_grade_astrocytomas_in_adults.1.pdf'
import file13 from '../pdf/DelayedOnset.pdf'
import file14 from '../pdf/Growth properties of SF188 V human glioma in rats in vivo.pdf'
import file15 from '../pdf/Hyperglycemia is independently associated with post-operative function loss.pdf'
import file16 from '../pdf/IL13 dTc Commentary on Kong et al Johnson CCR 2012.pdf.pdf'
import file17 from '../pdf/IL13 dTc Kong CCR 2012.pdf.pdf'
import file18 from '../pdf/Intracranial MEMS based temozolomide delivery in a 9L rat gliosarcoma model.pdf'
import file19 from '../pdf/Longitudinal in vivo monitoring of rodent glioma models .pdf'
import file20 from '../pdf/Postoperative Mortality After Surgery.pdf'
import file21 from '../pdf/Predictors of Visual Outcome Following Surgical.pdf'
import file22 from '../pdf/Suppression of Human Glioma Xenografts with Second-.pdf'
import file23 from '../pdf/The impact of bevacizumab on temozolomide concentrations in intracranial U87 gliomas.pdf'
import file24 from '../pdf/Anti-PD-1 Blockade and Stereotactic Radiation Produce.pdf'
import file25 from '../pdf/Central Nervous System Cancers.pdf'
import file26 from '../pdf/Combination of anti-VEGF therapy and temozolomide.pdf'
import file27 from '../pdf/Combination of paclitaxel thermal gel depot with temozolomide.pdf'
import file28 from '../pdf/Deep venous thrombosis and pulmonary.pdf'
import file29 from '../pdf/Editorial.pdf'
import file30 from '../pdf/Factors associated with survival for patients with glioblastoma with poor.pdf'
import file31 from '../pdf/Harvey Cushings Early Treatment of Meningiomas.pdf'
import file32 from '../pdf/Identifying Better Surgical Candidates Among Recursive Partitioning Analysis Class 2.pdf'
import file33 from '../pdf/Increased expression of glutamate transporter GLT-1 .pdf'
import file34 from '../pdf/Microdialysis measurement of intratumoral temozolomide.pdf'
import file35 from '../pdf/Multiple resections for patients with glioblastoma.pdf'
import file36 from '../pdf/1-s2.0-0006291X9291118A-main.pdf'
import file37 from '../pdf/1-s2.0-016546089290235Z-main.pdf'
import file38 from '../pdf/1-s2.0-0168365992900878-main.pdf'
import file39 from '../pdf/amjpathol00086-0170.pdf'
import file40 from '../pdf/Annals of Neurology - May 1992 - Guerin - Vascular differentiation and glucose transporter expression in rat gliomas .pdf'
import file41 from '../pdf/archotol_118_8_018.pdf'
import file42 from '../pdf/delivery.pdf'
import file43 from '../pdf/j-neurosurg-article-p640.pdf'
import file44 from '../pdf/Controlled release polymers to deliver.pdf'
import file45 from '../pdf/Polymers for Advanced Techs - October 1992 - Buahin - Controlled release of 4‐hydroperoxycyclophosphamide from the fatty.pdf'
import file46 from '../pdf/1-s2.0-000689939390354P-main.pdf'
import file47 from '../pdf/1-s2.0-026766059390104F-main.pdf'
import file48 from '../pdf/BF00685034.pdf'
import file49 from '../pdf/Interstitial_chemotherapy_of_the_9L_gliosarcoma_Co.pdf'
import file50 from '../pdf/zinreich-et-al-1993-frameless-stereotaxic-integration-of-ct-imaging-data-accuracy-and-initial-applications.pdf'
import file51 from '../pdf/1-s2.0-0006899394918619-main.pdf'
import file52 from '../pdf/1-s2.0-0165460894900450-main.pdf'
import file53 from '../pdf/Annals of the New York Academy of Sciences - September 1994 - SIPOS - Inhibition of Tumor Angiogenesisa.pdf'
import file54 from '../pdf/BF00686276.pdf'
import file55 from '../pdf/j-neurosurg-article-p283 (2).pdf'
import file56 from '../pdf/Journal of Biomedical Materials Research - March 1994 - Wu - In vivo versus in vitro degradation of controlled release.pdf'
import file57 from '../pdf/1-s2.0-S0140673695907556-main.pdf'
import file58 from '../pdf/1-s2.0-S0733861918300197-main.pdf'
import file59 from '../pdf/BF01060216.pdf'
import file60 from '../pdf/BF01060217.pdf'
import file61 from '../pdf/Intl Journal of Cancer - 4 September 1995 - Weingart - Local delivery of the topoisomerase I inhibitor camptothecin sodium.pdf'
import file62 from '../pdf/Intratumoral_Chemotherapy.pdf'
import file63 from  '../pdf/j-neurosurg-article-p481.pdf'
import file64 from '../pdf/j-neurosurg-article-p635.pdf'
import file65 from '../pdf/1-s2.0-0168365995001921-main.pdf'
import file66 from '../pdf/5217.full.pdf'
import file67 from '../pdf/A_1016035229961.pdf'
import file68 from '../pdf/Chemotherapeuticdrugsreleasedfrompolymers--distributionof13-bis2-chloroethyl-1-nitrosoureaintheratbrain1996.pdf'
import file69 from '../pdf/In_Vivo_Accuracy_Testing_and_Clinical_Experience.pdf'
import file70 from '../pdf/s002800050542.pdf'
import file71 from '../pdf/Seminars in Surgical Oncology - November December 1996 - Ewend - Treatment of melanoma metastases in the brain.pdf'
import file72 from '../pdf/1-s2.0-S0360301697002228-main.pdf'
import file73 from '../pdf/A_1005704913330.pdf'
import file75 from '../pdf/s002800050588.pdf'
import file76 from '../pdf/WNL.49.4.912.pdf'
import file77 from '../pdf/1-s2.0-S0360301698002582-main.pdf'
import file78 from '../pdf/672.full.pdf'
import file79 from '../pdf/A_1005958215384.pdf'
import file80 from '../pdf/cr0580132784.pdf'
import file81 from '../pdf/Local_Delivery_of_Chemotherapy_Prolongs_Survival.pdf'
import file82 from '../pdf/neurosurg-focus-article-pE10.pdf'
import file83 from '../pdf/neurosurg-focus-article-pE9.pdf'
import file84 from '../pdf/posner-et-al-1998-noncalcemic-antiproliferative-transcriptionally-active-24-fluorinated-hybrid-analogues-of-the-hormone.pdf'
import file85 from '../pdf/Radation Oncology Invest - 1998 - Cardinale - Effect of interstitial and or systemic delivery of tirapazamine on the.pdf'
import file86 from '../pdf/wiranowska-et-al-2009-interferon-containing-controlled-release-polymers-for-localized-cerebral-immunotherapy.pdf'
import file87 from '../pdf/Cancer - 2000 - Brem - The development of new brain tumor therapy utilizing the local and sustained delivery of.pdf'
import file88 from '../pdf/ch099902107p.pdf'
import file89 from '../pdf/Journal of Surgical Oncology - 1999 - Suh - Treament of liver metastases from colon carcinoma with autologous tumor vaccine.pdf'
import file90 from '../pdf/posner-et-al-1999-conceptually-new-sulfone-analogues-of-the-hormone-1α-25-dihydroxyvitamin-d3-synthesis-and-preliminary.pdf'
import file91 from '../pdf/A_1006482120049.pdf'
import file92 from '../pdf/intracranial_paracrine_interleukin_2_therapy.7.pdf'
import file93 from '../pdf/j-neurosurg-article-p419.pdf'
import file94 from '../pdf/Local_drug_delivery.pdf'
import file95 from '../pdf/Long_term_Visual_Outcome_after_Nonradical.pdf'
import file96 from '../pdf/neurosurg-focus-foc.2000.9.6.5.pdf'
import file97 from '../pdf/ch220006307p.pdf'
import file98 from '../pdf/1-s2.0-S016836590100311X-main.pdf'
import file99 from '../pdf/1-s2.0-S0968089601000876-main.pdf'
import file100 from '../pdf/A_1010963307097.pdf'
import file101 from '../pdf/A_1013845004294.pdf'
import file102 from '../pdf/hemangioblastomas_of_the_central_nervous_system_in.9.pdf'
import file103 from '../pdf/l_buthionine_sulfoximine_potentiates_the_antitumor.32.pdf'
import file104 from '../pdf/metastatic_meningioma_to_the_lung_with_multiple.10.pdf'
import file105 from '../pdf/nm0901-994.pdf'
import file106 from '../pdf/Recurrent ectopic craniopharyngioma.pdf'
import file107 from '../pdf/s11910-001-0020-z.pdf'
import file108 from '../pdf/1-s2.0-S0169409X02000546-main.pdf'
import file109 from '../pdf/A_1015003232713.pdf'
import file110 from '../pdf/A_1016049111941.pdf'
import file111 from '../pdf/ectopic_recurrence_of_craniopharyngioma_after_an.41.pdf'
import file112 from '../pdf/hypertonic_saline_ameliorates_cerebral_edema.3.pdf'
import file113 from '../pdf/j-neurosurg-article-p1173.pdf'
import file114 from '../pdf/pericytic_like_angiotropism_of_glioma_and_melanoma.3.pdf'
import file115 from '../pdf/1-s2.0-S003960600300120X-main.pdf'
import file116 from '../pdf/1-s2.0-S1535610803002769-main.pdf'
import file117 from '../pdf/3441.pdf'
import file118 from '../pdf/A_1024987321527.pdf'
import file119 from '../pdf/A_1025695423097.pdf'
import file120 from '../pdf/expert-review-neurotherapeutics.pdf'
import file121 from '../pdf/hammoud-et-al-2012-the-surgical-bed-after-bcnu-polymer-wafer-placement-for-recurrent-glioma-serial-assessment-on-ct-and.pdf'
import file122 from '../pdf/j-neurosurg-article-p1175.pdf'
import file123 from '../pdf/j-neurosurg-article-p467.pdf'
import file124 from '../pdf/j-neurosurg-article-p570.pdf'
import file125 from '../pdf/local_immunotherapy_with_interleukin_2_delivered.20.pdf'
import file126 from '../pdf/nrd1272.pdf'
import file127 from '../pdf/outcome_and_cost_of_craniotomy_performed_to_treat.9.pdf'
import file128 from '../pdf/1-s2.0-S0168365904003827-main.pdf'
import file129 from '../pdf/astroglia_induce_cytotoxic_effects_on_brain_tumors.33.pdf'
import file130 from '../pdf/B_DRUG.0000006172.65135.3e.pdf'
import file131 from '../pdf/B_NEON.0000040821.50347.c5.pdf'
import file132 from '../pdf/BF03345294.pdf'
import file133 from '../pdf/Clinical Course and Pathologic Findings After Gliadel  and Radiotherapy for Newly Diagnosed Malignant Glioma  Implications for Patient Management.pdf'
import file134 from '../pdf/nrd1414.pdf'
import file135 from '../pdf/pilocytic_and_pilomyxoid_hypothalamic_chiasmatic.10.pdf'
import file136 from '../pdf/s00280-004-0800-7.pdf'
import file137 from '../pdf/1-s2.0-S0168365905001719-main.pdf'
import file138 from '../pdf/3825.full.pdf'
import file139 from '../pdf/jnccn-article-p644.pdf'
import file140 from '../pdf/jnccn-article-p721.pdf'
import file141 from '../pdf/j-neurosurg-article-p371.pdf'
import file142 from '../pdf/j-neurosurg-spine-article-p142.pdf'
import file143 from '../pdf/j-neurosurg-spine-article-p303.pdf'
import file144 from '../pdf/joc41778.pdf'
import file145 from '../pdf/Local delivery of antineoplastic agents by controlled-release polymers for the treatment of malignant brain tumours.pdf'
import file146 from '../pdf/local_delivery_of_a_synthetic_endostatin_fragment.23.pdf'
import file147 from '../pdf/quinn-et-al-2016-phase-i-trial-of-temozolomide-plus-o6-benzylguanine-for-patients-with-recurrent-or-progressive.pdf'
import file148 from '../pdf/4523.pdf'
import file149 from '../pdf/a_novel_model_of_intramedullary_spinal_cord_tumors.23.pdf'
import file150 from '../pdf/Interstitial_Docetaxel_Taxotere_Carmustine_and_Com.pdf'
import file151 from '../pdf/nature05349.pdf'
import file152 from '../pdf/nihms-11448.pdf'
import file153 from '../pdf/nihms-11449.pdf'
import file154 from '../pdf/7977.pdf'
import file155 from '../pdf/achieving_the_national_quality_forum_s__never.6.pdf'
import file156 from '../pdf/intracavernous_trigeminal_ganglion_amyloidoma_.21.pdf'
import file157 from '../pdf/j-neurosurg-article-p347.pdf'
import file158 from '../pdf/nihms27676.pdf'
import file159 from '../pdf/nihms33599.pdf'
import file160 from '../pdf/Paclitaxel  a review of adverse toxicities and novel delivery strategies.pdf'
import file161 from '../pdf/s00280-006-0407-2.pdf'
import file162 from '../pdf/s11060-006-9303-1.pdf'
import file163 from '../pdf/a_safety_and_efficacy_study_of_local_delivery_of.4.pdf'
import file164 from '../pdf/extent_of_surgical_resection_is_independently.19.pdf'
import file165 from '../pdf/s10434-008-0048-2.pdf'
import file166 from '../pdf/1-s2.0-S0090301908006538-main.pdf'
import file167 from '../pdf/1-s2.0-S096758680900068X-main.pdf'
import file168 from '../pdf/j-neurosurg-article-p156.pdf'
import file169 from '../pdf/j-neurosurg-article-p583.pdf'
import file170 from '../pdf/nihms92870.pdf'
import file171 from '../pdf/s11095-009-9893-3.pdf'
import file172 from '../pdf/Clinical Endocrinology - 2010 - Grossman - ORIGINAL ARTICLE  Complications and death among elderly patients undergoing.pdf'
import file173 from '../pdf/combination_of_intracranial_temozolomide_with.14.pdf'
import file174 from '../pdf/j-neurosurg-article-p210.pdf'
import file175 from '../pdf/j-neurosurg-article-p286.pdf'
import file176 from '../pdf/perioperative_and_long_term_outcomes_from_the.14.pdf'
import file177 from '../pdf/Persistent outpatient hyperglycemia is independently associated with survival  recurrence and malignant degeneration following surgery for hemispheric.pdf'
import file178 from '../pdf/s10434-010-1092-2.pdf'
import file179 from '../pdf/s11060-009-9984-3.pdf'
import file180 from '../pdf/1-s2.0-S0142961210015802-main.pdf'
import file181 from '../pdf/1-s2.0-S1878875010006352-main.pdf'
import file182 from '../pdf/jnccn-article-p352.pdf'
import file183 from '../pdf/j-neurosurg-article-p1139.pdf'
import file184 from '../pdf/j-neurosurg-article-p587.pdf'
import file185 from '../pdf/j-neurosurg-article-p604.pdf'
import file186 from '../pdf/nihms728680.pdf'
import file187 from '../pdf/nihms728691.pdf'
import file188 from '../pdf/nor050.pdf'
import file189 from '../pdf/s10434-010-1299-2.pdf'
import file190 from '../pdf/ssh05001_226_232.pdf'
import file191 from '../pdf/fonc-08-00660.pdf'
import file192 from '../pdf/s-0038-1667066.pdf'
import file193 from '../pdf/5094.pdf'
import file194 from '../pdf/costs_and_their_predictors_in_transsphenoidal.13.pdf'
import file195 from '../pdf/full_thickness_skin_grafting_for_local_defect.27 (1).pdf'
import file196 from '../pdf/Intl Journal of Cancer - 2019 - Mathios - Genome‐wide investigation of intragenic DNA methylation identifies ZMIZ1 gene as.pdf'
import file197 from '../pdf/j-neurosurg-article-p295.pdf'
import file198 from '../pdf/j-neurosurg-article-p848.pdf'
import file199 from '../pdf/nihms-1544399.pdf'
import file200 from '../pdf/s11060-019-03172-5.pdf'
import file201 from '../pdf/s41598-019-54283-y.pdf'
import file202 from '../pdf/sonolucent_cranial_implants__cadaveric_study_and.35.pdf'
import file203 from '../pdf/transcranioplasty_ultrasound_through_a_sonolucent.121.pdf'
import file204 from '../pdf/1-s2.0-S0041624X20301499-main.pdf'
import file205 from '../pdf/1-s2.0-S0967586820315721-main.pdf'
import file206 from '../pdf/1-s2.0-S1878875020304204-main.pdf'
import file207 from '../pdf/1-s2.0-S1878875020311384-main.pdf'
import file208 from '../pdf/1-s2.0-S1878875020314169-main.pdf'
import file209 from '../pdf/1-s2.0-S1878875020315175-main.pdf'
import file210 from '../pdf/1-s2.0-S1931720420300702-main.pdf'
import file211 from '../pdf/1797.pdf'
import file212 from '../pdf/1131704.pdf'
import file213 from '../pdf/first_in_human_experience_with_integration_of.16.pdf'
import file214 from '../pdf/introducing_medical_students_to_the_burgeoning.3.pdf'
import file215 from '../pdf/jnccn-article-p1537.pdf'
import file216 from '../pdf/j-neurosurg-article-p78.pdf'
import file217 from '../pdf/j-neurosurg-article-p87.pdf'
import file218 from '../pdf/Novel therapeutics for brain tumors  current practice and future prospects.pdf'
import file219 from '../pdf/risk_of_complications_in_primary_versus.27.pdf'
import file220 from '../pdf/s11060-020-03556-y.pdf'
import file221 from '../pdf/s41598-020-64492-5.pdf'
import file222 from '../pdf/translucent_customized_cranial_implants_made_of.14.pdf'
import file223 from '../pdf/1-s2.0-S0303846721003000-main.pdf'
import file224 from '../pdf/1-s2.0-S1878875021018532-main.pdf'
import file225 from '../pdf/Combination checkpoint therapy with anti-PD-1 and anti-BTLA results in a synergistic therapeutic effect against murine glioblastoma.pdf'
import file226 from '../pdf/j-neurosurg-article-p283.pdf'
import file227 from '../pdf/j-neurosurg-article-p295 (2).pdf'
import file228 from '../pdf/j-neurosurg-article-p379 (1).pdf'
import file229 from '../pdf/j-neurosurg-article-p1062.pdf'
import file230 from '../pdf/j-neurosurg-pediatr-article-p482 (1).pdf'
import file231 from '../pdf/j-neurosurg-pediatr-article-p734.pdf'
import file232 from '../pdf/journal.pone.0251957.pdf'
import file233 from '../pdf/nihms-1779225.pdf'
import file234 from '../pdf/pd_1__monocytes_mediate_cerebral_vasospasm.21.pdf'
import file235 from '../pdf/predictors_of_academic_neurosurgical_career.16.pdf'
import file236 from '../pdf/s11060-021-03702-0.pdf'
import file237 from '../pdf/s11060-021-03916-2 (1).pdf'
import file238 from '../pdf/s41467-021-22186-0.pdf'
import file239 from '../pdf/the_impact_of_hydrocephalus_shunt_devices_on.24 (1).pdf'
import file240 from '../pdf/the_neuroplastic_surgery_fellowship_experience_.5.pdf'
import file241 from '../pdf/vdaa154.pdf'
import file242 from '../pdf/1-s2.0-S093964112100360X-main.pdf'
import file243 from '../pdf/1-s2.0-S0967586822002193-main.pdf'
import file244 from '../pdf/1-s2.0-S1878875022006702-main.pdf'
import file245 from '../pdf/cranioplasty_outcomes_from_500_consecutive.6 (1).pdf'
import file246 from '../pdf/cranioplasty_with_customized_craniofacial_implants.5.pdf'
import file247 from '../pdf/first_experience_with_postoperative_transcranial.19.pdf'
import file248 from '../pdf/fsurg-09-1040066.pdf'
import file249 from '../pdf/jciinsight-7-154804.pdf'
import file250 from '../pdf/j-neurosurg-article-p1227 (2).pdf'
import file251 from '../pdf/j-neurosurg-article-p251.pdf'
import file252 from '../pdf/j-neurosurg-article-p931.pdf'
import file253 from '../pdf/patient_safety_indicator_04_does_not_consistently.14.pdf'
import file254 from '../pdf/predictors_and_impact_of_postoperative_30_day.14.pdf'
import file255 from '../pdf/reexamining_the_role_of_postoperative_icu.10 (1).pdf'
import file256 from '../pdf/Intl Journal of Cancer - 2023 - Ofek - Deoxyhypusine hydroxylase  A novel therapeutic target differentially expressed in.pdf'
import file257 from '../pdf/PD-1stroke_published_BBI.pdf'
import file258 from '../pdf/wang-et-al-2023-self-assembling-paclitaxel-mediated-stimulation-of-tumor-associated-macrophages-for-postoperative (1).pdf'
import file259 from '../pdf/1-s2.0-S1878875024000330-main.pdf'
import file260 from '../pdf/Bioengineering   Transla Med - 2024 - Buaron - Ultrasound inhibits tumor growth and selectively eliminates malignant brain.pdf'
import file261 from '../pdf/s40164-023-00468-1.pdf'
import file262 from '../pdf/Editorial.pdf'
import file263 from '../pdf/NY-ESO-1 Expression in Meningioma Suggests.pdf'
import file264 from '../pdf/Patients undergoing surgery of intracranial.pdf'
import file265 from '../pdf/Predictors of Visual Outcome Following Surgical Resection of Medial Sphenoid Wing Meningiomas.pdf'
import file266 from '../pdf/Seizure Control for Patients Undergoing Meningioma Surgery.pdf'
import file267 from '../pdf/Survival and Recurrence for Patients Undergoing.pdf'
import file268 from '../pdf/Vaccine strategies for glioblastoma.pdf'
import file269 from '../pdf/Central Nervous System Cancers, Version 2.2014.pdf'
import file270 from '../pdf/Combination of anti-VEGF therapy and temozolomide.pdf'
import file271 from '../pdf/Detection of Circulating Tumor DNA in.pdf'
import file272 from '../pdf/Efficacy of local polymer-based and systemic delivery of.pdf'
import file273 from '../pdf/Emerging insights into barriers to effective brain tumor.pdf'
import file274 from '../pdf/Establishing percent resection and residual volume thresholds.pdf'
import file275 from '../pdf/Extravascular Optical Coherence Tomography.pdf'
import file276 from '../pdf/Factors associated with survival and.pdf'
import file277 from '../pdf/Focal Radiation Therapy Combined with 4-1BB Activation.pdf'
import file278 from '../pdf/Identifying Better Surgical Candidates.pdf'
import file279 from '../pdf/Intracranial microcapsule chemotherapy delivery.pdf'
import file280 from '../pdf/Local delivery of angiogenesis-inhibitor minocycline.pdf'
import file281 from '../pdf/Patient-Perceived Long-Term Communication and Swallow Function.pdf'
import file282 from '../pdf/PNAS-2014-Upadhyay-1313420110.pdf'
import file283 from '../pdf/Preoperative anemia increases postoperative morbidity in elective.pdf'
import file284 from '../pdf/Radiosensitization of malignant gliomas following.pdf'
import file285 from '../pdf/Surgical outcomes of craniocervial junction meningiomas.pdf'
import file286 from '../pdf/Berli et al JCS_Single Stage Cranioplasty.pdf'
import file287 from '../pdf/Central Nervous System Cancers, Version 1.2015.pdf'
import file288 from '../pdf/Delivery of local therapeutics to the brain.pdf'
import file289 from '../pdf/Detection of tumor-derived DNA in cerebrospinal fluid of patients with primary tumors.pdf'
import file290 from '../pdf/Inhibition of Corneal Neovascularization by Subconjunctival.pdf'
import file291 from '../pdf/Interstitial chemotherapy for malignant glioma.pdf'
import file292 from '../pdf/Local delivery of cancer-cell glycolytic inhibitors in high-grade glioma.pdf'
import file293 from '../pdf/Metformin inhibits growth of human glioblastoma cells and enhances therapeutic response.pdf'
import file294 from '../pdf/MGMT inactivation and clinical response in newly diagnosed GBM patients.pdf'
import file295 from '../pdf/Polymeric nanoparticles for nonviral gene therapy extend brain tumor survival in vivo.pdf'
import file296 from '../pdf/Risk of surgical site infection in 401.pdf'
import file297 from '../pdf/Uniform brain tumor distribution and tumor associated macrophage targeting of systemically administered dendrimers.pdf'
import file298 from '../pdf/Agonist anti-GITR monoclonal antibody and stereotactic radiation induce immune-mediated survival.pdf'
import file299 from '../pdf/Combination therapy with anti-PD-1, anti-TIM-3, and focal radiation results in regression of murine gliomas.pdf'
import file300 from '../pdf/Discussion of Effect of Reflection of Temporalis Muscle During Cranioplasty With Titanium Mesh.pdf'
import file301 from '../pdf/Establishment and Biological Characterization of a Panel of Glioblastoma Multiforme (GBM).pdf'
import file302 from '../pdf/Highlights of Children with Cancer UKs Workshop on Drug Delivery in Paediatric Brain Tumours.pdf'
import file303 from '../pdf/Mathios et al., Sci. Transl. Med. 8, 370ra180 (2016) 21 December 2016.pdf'
import file304 from '../pdf/Nanobiotechnology-based delivery strategies.pdf'
import file305 from '../pdf/Non-virally engineered human adipose mesenchymal stem cells produce BMP4.pdf'
import file306 from '../pdf/Polylactic acid (PLA) controlled delivery carriers for.pdf'
import file307 from '../pdf/Sankey et al periop Anticoagulation cranioplasty paper.pdf'
import file308 from '../pdf/Surgical complications following malignant brain tumor surgery.pdf'
import file309 from '../pdf/Syndrome of the Trephined- A Systematic Review.pdf'
import file310 from '../pdf/Synthesis, characterization, and self-assembly with plasmid DNA of aquaternary ammonium derivative.pdf'
import file311 from '../pdf/Systemic Tolerance Mediated by Melanoma Brain Tumors Is Reversible.pdf'
import file312 from '../pdf/The effect of regadenoson-induced transient disruption of the blood-brain barrier on temozolomide delivery.pdf'
import file313 from '../pdf/The Johns Hopkins Hunterian Laboratory Philosophy.pdf'
import file314 from '../pdf/Time Interval Reduction for Delayed Implant-Based Cranioplasty Reconstruction.pdf'
import file315 from '../pdf/Anti–PD-1 antitumor immunity is enhanced by local and abrogated by systemic chemotherapy in GBM.pdf'
import file316 from '../pdf/Central Nervous System Cancers, Version 1.2017.pdf'
import file317 from '../pdf/Comparison of Complications, Trends, and Costs.pdf'
import file318 from '../pdf/Convection enhanced delivery of cisplatin-loaded brain penetrating.pdf'
import file319 from '../pdf/Deferred Radiation Therapy After Debulking of Nonfunctioning.pdf'
import file320 from '../pdf/Defining Glioblastoma Resectability Through the.pdf'
import file321 from '../pdf/Developing Therapies for Brain Tumors.pdf'
import file322 from '../pdf/Discussion on Usefulness of an Osteotomy Template for Skull Tumorectomy and Simultaneous Skull Reconstruction.pdf'
import file323 from '../pdf/HIF-1α- Targeting Acriflavine Provides Long Term Survival and Radiological Tumor Response in Brain Cancer Therapy.pdf'
import file324 from '../pdf/Metastatic Atypical and Anaplastic Meningioma.pdf'
import file325 from '../pdf/Risk Factors for Preoperative Seizures and Loss of Seizure Control in Patients Undergoing.pdf'
import file326 from '../pdf/The efficacy of lapatinib and nilotinib in combination.pdf'
import file327 from '../pdf/Use of an anti-viral drug Ribavirin, as an anti-glioblastoma therapeutic.pdf'
import file328 from '../pdf/Brem H and Stein BMS. Posterior surgical approach to.pdf'
import file329 from '../pdf/Brem H, Anderson, JH, Ahn HS, and Rosenbaum AE..pdf'
import file330 from '../pdf/1988_RJT.pdf'
import file331 from '../pdf/j-neurosurg-article-p928.pdf'
import file332 from '../pdf/Posterior fossa neuroblastoma in an elderly man..pdf'
import file333 from '../pdf/1-s2.0-0197458089901644-main.pdf'
import file334 from '../pdf/brem-et-al-1989-biocompatibility-of-a-biodegradable-controlled-release-polymer-in-the-rabbit-brain.pdf'
import file335 from '../pdf/Journal of Biomedical Materials Research - February 1989 - Tamargo - Brain biocompatibility of a biodegradable .pdf'
import file336 from '../pdf/levy1989.pdf'
import file337 from '../pdf/lipomeningioma__report_of_three_cases_and_review.24 (1).pdf'
import file338 from '../pdf/Magnetic Resonance in Med - August 1989 - Grant Steen - In vivo 31P nuclear magnetic resonance spectroscopy of rat 9l.pdf'
import file339 from '../pdf/Yang MB, Tamargo RJ, and Brem H..pdf'


const Database = () => {
    const data = {
        1985: [
            { title: "Posterior surgical approaches to the third ventricle and pineal region.", link: file328}
        ],
        1986: [
            { title: "Carotid bifurcation imaging model for more accurately comparing imaging techniques", link: file329}
        ],
        1988: [
            { title: "In Vivo 31PNuclear Magnetic Resonance Spectroscopy of Subcutaneous 9L Gliosarcoma: Effects of Tumor Growth and Treatment with l,3-Bis(2-chloroethyl)-l-nitrosourea on Tumor Bioenergetics and Histology", link: file330},
            { title: "Heterotransplantation of malignant human gliomas in neonatal rats ", link: file331},
            { title: "Posterior fossa neuroblastoma in an elderly man.", link: file332},
        ],
        1989: [
            { title: "New Directions in CNS Drug Delivery", link: file333},
            { title: "Biocompatibility of a Biodegradable, Controlled-Release Polymer in the Rabbit Brain", link: file334},
            { title: "Brain biocompatibility of a biodegradable, controlled-release polymer in rats", link: file335},
            { title: "An Endothelial Cell Growth Factor from the Mouse Neuroblastoma Cell Line NB41", link: file336},
            { title: "Lipomeningioma: Report of Three and Review of Literature", link: file337},
            { title: "In Vivo 31P Nuclear Magnetic Resonance Spectroscopy of Rat 9L Gliosarcoma Treated with BCNU: Dose Response of Spectral Changes", link: file338},
            { title: "Controlled Delivery of 1,3-Bis(2-chloroethyl)-1-nitrosourea from Ethylene-Vinyl Acetate Copolymer", link: file339},
        ],
        1990: [
            { title: "Growth inhibition of the 9L glioma using polymers to release heparin and cortisone acetate", link: file1},
            { title: "Neurological Surgery", link: file2},
            { title: "The glucose transporter and blood-brain barrier of human brain tumors", link: file3},
            { title: "Polymers to Treat Brain Tumors", link: file4},
        ],
        1991: [
            { title: "Interstitial chemotherapy with drug polymer implants for the treatment of recurrent gliomas", link: file5 },
            { title: "Solitary, Isolated Metastasis from Ewing's Sarcoma to the Brain: Case Report", link: file6 },
            { title: "Angiogenesis Inhibition by Minocycline", link: file7 },
            { title: "A New Technique for Explantation and In Vitro Cultivation of Chicken Embryos", link: file8 },
            { title: "Polymeric controlled release of dexamethasone in normal rat brain", link: file9 },
            { title: "Multidrug resistance gene (MDR1) expression in human brain tumors", link: file10 },
            { title: "Interstitial delivery of dexamethasone in the brain for the reduction of peritumoral edema", link: file11 },
            { title: "Supratentorial Low-Grade Astrocytomas in Adults", link: file12 }
        ],
        1992: [
            { title: "Selective endothelial growth inhibition by tetracyclines that inhibit collagenase", link: file36 },
            { title: "Chromosome Abnormalities in Low-Grade Central Nervous System Tumors", link: file37 },
            { title: "Brain biocompatibility 325 of a biodegradable controlled release polymer consisting of anhydride copolymer of fatty acid dimer and sebacic acid", link: file38 },
            { title: "Vascular Expression of Glucose Transporter in Experimental Brain Neoplasms", link: file39 },
            { title: "Vascular Drfferentiation and Glucose Transporter Expression in Rat Gliomas: Effects of Steroids", link: file40 },
            { title: "Ameloblastoma of the Mandible With Intracranial Metastasis", link: file41 },
            { title: "Drug delivery to the central nervous system: a review.", link: file42 },
            { title: "The intracerebral distribution of BCNU delivered by surgically implanted biodegradable polymers", link: file43 },
            { title: "Controlled release polymers to deliver drugs to the brain", link: file44 },
            { title: "Controlled Release of 4-Hydroperoxy- cyclophosphamide from the Fatty Acid Dimer-Sebacic Acid Copolymer", link: file45 },
        ],
        1993: [
            { title: "Dexamethasone reduces vascular density and plasminogen activator activity in 9L rat brain tumors ", link: file46 },
            { title: "Ocular and Brain Biocompatibility of Polymeric Delivery Materials Prepared from Ester Derivatives of Hyaluronic Acid ", link: file47 },
            { title: "Direct delivery of platinum-based antineoplastics to the central nervous system: a toxicity and ultrastructural study", link: file48 },
            { title: "Interstitial Chemotherapy of the 9L Gliosarcoma: Controlled Release Polymers for Drug Delivery in the Brain", link: file49 },
            { title: "Frameless Stereotaxic Integration of CT Imaging Data: Accuracy and Initial Applications’", link: file50 }
        ],
        1994: [
            { title: "Endothelial differentiation in intracerebral and subcutaneous experimental gliomas", link: file51 },
            { title: "Chromosome Abnormalities in Meningeal Neoplasms: Do They Correlate with Histology?", link: file52 },
            { title: "Inhibition of Tumor Angiogenesis", link: file53 },
            { title: "Cytotoxicity of taxol in vitro against human and rat malignant brain tumors", link: file54 },
            { title: "Biodegradable polymers for controlled delivery of chemotherapy with and without radiation therapy in the monkey brain", link: file55 },
            { title: "In vivo versus in vitro degradation of controlled release polymers for intracranial surgical therapy", link: file56 }
        ],
        1995: [
            { title: "Placebo-controlled trial of safety and efficacy of intraoperative controlled delivery by biodegradable polymers of chemotherapy for recurrent gliomas", link: file57 },
            { title: "New Delivery Systems for Brain Tumor Therapy", link: file58 },
            { title: "Interstitial chemotherapy of experimental brain tumors: comparison of intratumoral injection versus polymeric controlled release", link: file59 },
            { title: "The safety of interstitial chemotherapy with BCNU-loaded polymer followed by radiation therapy in the treatment of newly diagnosed malignant gliomas: phase I trial", link: file60 },
            { title: "Local Delivery of The Topoisomerase I Inhibitor Camptothecin Sodium Prolongs Survival In The Rat IntraCranial 9L Gliosarcoma Model", link: file61 },
            { title: "Intratumoral Chemotherapy", link: file62 },
            { title: "Effectiveness of controlled release of a cyclophosphamide derivative with polymers against rat gliomas", link: file63 },
            { title: "The role of minocycline in the treatment of intracranial 9L glioma", link: file64 }
        ],
        1996: [
            { title: "Potentiation of anticancer effects of microencapsulated carboplatin by hydroxypropyl oL-cyclodextrin", link:  file65},
            { title: "Local delivery of chemotherapy and concurrent external beam radiotherapy prolongs survival in metastatic brain tumor models", link:  file66},
            { title: "Morphological characterization of polyanhydride biodegradable implant gliadel during in vitro and in vivo erosion using scanning electron microscopy", link:  file67},
            { title: "Chemotherapeutic drugs released from polymers: Distribution of 1,3-bis(2-chloroethyl)-1-nitrosourea in the rat brain", link:  file68},
            { title: "In Vivo Accuracy Testing and Clinical Experience with the ISG Viewing Wand", link:  file69},
            { title: "Interstitial delivery of carboplatin via biodegradable Polymers is effective against experimental glioma in the rat", link:  file70},
            { title: "Treatment of Melanoma Metastases in the Brain", link:  file71},
        ],
        1997: [
            { title: "Short course radiotherapy is an appropriate option for most malignant glioma patients", link: file72},
            { title: "Implantable biodegradable polymers for IUdR radiosensitization of experimental human malignant glioma", link: file73},
            { title: "Optimizing interstitial delivery of BCNU from controlled release polymers for the treatment of brain tumors", link: file75},
            { title: "Challenges in the design and conduct of phase III brain tumor therapy trials", link: file76}, 
        ],
        1998: [
            { title: "Synthetic, implantable polymers for local delivery of IUdR to experimental human malignant glioma", link:  file77},
            { title: "Pharmacokinetics of Interstitial Delivery of Carmustine, 4-Hydroperoxycyclophosphamide, and Paclitaxel from a Biodegradable Polymer Implant in the Monkey Brain", link:  file78},
            { title: "Stereotactic radiosurgery for brain metastases: Comparison of lung carcinoma vs. non-lung tumors", link:  file79},
            { title: "Squalamine Inhibits Angiogenesis and Solid Tumor Growth in Vivo and Perturbs Embryonic Vasculature", link:  file80},
            { title: "Local Delivery of Chemotherapy Prolongs Survival in Experimental Brain Metastases from Breast Carcinoma", link:  file81},
            { title: "Late-onset facial nerve degeneration after vestibular schwannoma surgery: incidence, putative mechanisms, and prevention", link:  file82},
            { title: "Moyamoya syndrome associated with cocaine abuse", link:  file83}, 
            { title: "Noncalcemic, Antiproliferative, Transcriptionally Active, 24-Fluorinated Hybrid Analogues of the Hormone 1r,25-Dihydroxyvitamin D3. Synthesis and Preliminary Biological Evaluation", link:  file84},
            { title: "Effect of Interstitial and/or Systemic Delivery of Tirapazamine on the Radiosensitivity of Human Glioblastoma Multiforme in Nude Mice", link:  file85},
            { title: "Interferon-Containing Controlled-Release Polymers for Localized Cerebral Immunotherapy", link:  file86}
        ],
        1999: [
            { title: "The Development of New Brain Tumor Therapy Utilizing the Local and Sustained Delivery of Chemotherapeutic Agents from Biodegradable Polymers", link: file87 },
            { title: "Paracrine Immunotherapy with Interleukin-2 and Local Chemotherapy Is Synergistic in the Treatment of Experimental Brain Tumors", link: file88 },
            { title: "Treament of Liver Metastases from Colon Carcinoma with Autologous Tumor Vaccine Expressing Granulocyte-Macrophage Colony-Stimulating Factor", link: file89 },
            { title: "Conceptually New Sulfone Analogues of the Hormone 1r,25-Dihydroxyvitamin D3: Synthesis and Preliminary Biological Evaluation", link: file90 }
        ],
        2000: [
            { title: "Local anti-angiogenic brain tumor therapies", link:  file91},
            { title: "Intracranial Paracrine Interleukin-2 Therapy Stimulates Prolonged Antitumor Immunity That Extends Outside the Central Nervous System", link: file92},
            { title: "Paracrine delivery of IL-12 against intracranial 9L gliosarcoma in rats", link:  file93},
            { title: "Local Drug Delivery", link:  file94},
            { title: "Paracrine delivery of IL-12 against intracranial 9L gliosarcoma in rats", link: file95},
            { title: "Comparative analysis of paracrine immunotherapy in experimental brain tumors", link:  file96},
            { title: "O6-benzylguanine potentiates the antitumor effect of locally delivered carmustine against an intracranial rat glioma", link: file97}
        ],
        2001: [
            { title: "Biodegradable polymer implants to treat brain tumors", link:  file98},
            { title: "Conformationally Restricted Hybrid Analogues of the Hormone 1 ,25-Dihydroxyvitamin D3:Design, Synthesis, and Biological Evaluation", link:  file99},
            { title: "Controlled Local Delivery of Interleukin-2 by Biodegradable Polymers Protects Animals from Experimental Brain Tumors and Liver Tumors", link:  file100},
            { title: "The prognostic value of tumor markers in patients with glioblastoma multiforme: analysis of 32 patients and review of the literature", link:  file101},
            { title: "Hemangioblastomas of the Central Nervous System in von Hippel-Lindau Syndrome and Sporadic Disease", link:  file102},
            { title: "L-Buthionine Sulfoximine Potentiates the Antitumor Effect of 4-Hydroperoxycyclophosphamide When Administered Locally in a Rat Glioma Model", link:  file103},
            { title: "Metastatic Meningioma to the Lung With Multiple Pleural Metastases", link:  file104},
            { title: "Excitotoxic destruction facilitates brain tumor growth", link:  file105},
            { title: "Recurrent ectopic craniopharyngioma", link:  file106},
            { title: "Drug Delivery to Tumors of the Central Nervous System", link:  file107}
        ],
        2002: [
            { title: "Local drug delivery to the brain", link:  file108},
            { title: "Polymer delivery of camptothecin against 9L gliosarcoma: release, distribution, and efficacy", link:  file109},
            { title: "Extreme drug resistance in primary brain tumors: in vitro analysis of 64 resection specimens", link:  file110},
            { title: "Ectopic Recurrence of Craniopharyngioma after an Interhemispheric Transcallosal Approach: Case Report", link:  file111},
            { title: "Hypertonic Saline Ameliorates Cerebral Edema Associated With Experimental Brain Tumor", link:  file112},
            { title: "Local delivery of mitoxantrone for the treatment of malignant brain tumors in rats", link:  file113},
            { title: "Pericytic-Like Angiotropism of Glioma and Melanoma Cells", link:  file114}
        ],
        2003: [
            { title: "Preparing Hopkins medical students for a career in academic neurosurgery", link:  file115},
            { title: "Advancing the field of drug delivery:Taking aim at cancer", link:  file116},
            { title: "Polilactofate Microspheres for Paclitaxel Delivery to Central Nervous System Malignancies", link:  file117},
            { title: "Gene therapy for experimental brain tumors using a xenogenic cell line engineered to secrete hIL-2", link:  file118},
            { title: "Local delivery of minocycline and systemic BCNU have synergistic activity in the treatment of intracranial glioma", link:  file119},
            { title: "Local delivery of antineoplastic agents using biodegradable polymers for the treatment of malignant brain tumors", link:  file120},
            { title: "The Surgical Bed After BCNU Polymer Wafer Placement for Recurrent Glioma:  Serial Assessment on CT and MR Imaging", link:  file121},
            { title: "Perioperative complications and neurological outcomes of first and second craniotomies among patients enrolled in the Glioma Outcome Project", link:  file122},
            { title: "Survival following surgery and prognostic factors for recently diagnosed malignant glioma: data from the Glioma Outcomes Project", link:  file123},
            { title: "Camptothecin analogs in malignant gliomas: comparative analysis and characterization", link:  file124},
            {title: "Local immunotherapy with interleukin-2 delivered from biodegradable polymer microspheres combined with interstitial chemotherapy: a novel treatment for experimental malignant glioma", link: file124},
            { title: "Biodegradable multi-drug dispenser", link:  file125},
            { title: "Outcome and cost of craniotomy performed to treat tumors in regional academic referral centers", link:  file126},
        ],
        2004: [
            { title: "In vivo release from a drug delivery MEMS device", link:  file127},
            { title: "Astroglia induce cytotoxic effects on brain tumors via a nitric oxide-dependent pathway both in vitro and in vivo", link:  file128},
            { title: "Recent advances in brain tumor therapy: local intracerebral drug delivery by polymers", link:  file129},
            { title: "Dexamethasone mediated inhibition of local IL-2 immunotherapy is dose dependent in experimental brain tumors", link: file130 },
            { title: "Metastatic renal cell carcinoma to the pituitary presenting with hyperprolactinemia", link: file131 },
            { title: "Clinical Course and Pathologic Findings After Gliadel® and Radiotherapy for Newly Diagnosed Malignant Glioma: Implications for Patient Management", link: file132 },
            { title: "Targeted therapy for brain tumours", link: file133 },
            { title: "Pilocytic and pilomyxoid hypothalamic/chiasmatic astrocytomas", link: file134 },
            { title: "Systemic BCNU enhances the efficacy of local delivery of a topoisomerase I inhibitor against malignant glioma", link: file135 }
        ],
        2005: [
            { title: "In vivo delivery of BCNU from a MEMS device to a tumor model", link:  file136},
            { title: "Local Delivery of Doxorubicin for the Treatment of Malignant Brain Tumors in Rats", link:  file137},
            { title: "NCCN Clinical Practice Guidelines in Oncology", link:  file138},
            { title: "Local Treatment of Malignant Brain Tumors Using Implantable Chemotherapeutic Polymers", link:  file139},
            { title: "Rhabdoid meningioma occurring in an unrelated resection cavity with leptomeningeal carcinomatosis", link:  file140},
            { title: "A novel intramedullary spinal cord tumor model: functional, radiological, and histopathological characterization", link:  file141},
            { title: "A novel rat model for the study of intraosseous metastatic spine cancer", link:  file142},
            { title: "Patterns of Care for Adults With Newly Diagnosed Malignant Glioma", link:  file143},
            { title: "Local delivery of antineoplastic agents by controlled-release polymers for the treatment of malignant brain tumours", link:  file144},
            { title: "Local delivery of a synthetic endostatin fragment for the treatment of experimental gliomas", link:  file145},
            { title: "Phase I Trial of Temozolomide Plus O6-Benzylguanine for Patients With Recurrent or Progressive Malignant Glioma", link:  file146},
            { title: "Local delivery of interleukin-2 and adriamycin is synergistic in the treatment of experimental malignant glioma", link:  file147}
        ],
        2006: [
            { title: "In vitro Drug Response and Molecular Markers Associated with Drug Resistance in Malignant Gliomas", link:  file148},
            { title: "A novel intramedullary spinal cord tumor model: functional, radiological, and histopathological characterization", link:  file149},
            { title: "Interstitial Docetaxel (Taxotere), Carmustine and Combined Interstitial Therapy: a Novel Treatment for Experimental Malignant Glioma", link:  file150},
            { title: "Bone morphogenetic proteins inhibit the tumorigenic potential of human brain tumour-initiating cells", link:  file151},
            { title: "Lactacystin Exhibits Potent Anti-Tumor Activity in an Animal Model of Malignant Glioma when Administered via ControlledRelease Polymers", link:  file152},
            { title: "Local Intracerebral Administration of Paclitaxel with the Paclimer® Delivery System: Toxicity Study in a Canine Model", link:  file153}
        ],
        2007: [
            { title: "Clostridium perfringens Enterotoxin as a Novel-Targeted Therapeutic for Brain Metastasis", link:  file154},
            { title: "Achieving the National Quality Forum’s “Never Events”", link:  file155},
            { title: "Intracavernous trigeminal ganglion amyloidoma: case report", link:  file156},
            { title: "Reduction of cerebrospinal fluid rhinorrhea after vestibular schwannoma surgery by reconstruction of the drilled porus acusticus with hydroxyapatite bone cement", link:  file157},
            { title: "Preservation of Glial Cytoarchitecture from Ex Vivo Human Tumor and Non-Tumor Cerebral Cortical Explants: A Human Model to Study Neurological Diseases", link:  file158},
            { title: "Resorbable Polymer Microchips Releasing BCNU Inhibit Tumor  Growth in the Rat 9L Flank Model", link:  file159},
            { title: "Paclitaxel: a review of adverse toxicities and novel delivery strategies", link:  file160},
            { title: "Local delivery of temozolomide by biodegradable polymers is superior to oral administration in a rodent glioma model", link:  file161},
            { title: "Interstitial chemotherapy for malignant gliomas: the Johns Hopkins experience", link:  file162}
        ],
        2008: [
            { title: "A safety and efficacy study of local delivery of interleukin-12 transgene by PPC polymer in a model of experimental glioma", link:  file163},
            { title: "Extent of surgical resection is independently associated with survival in patients with hemispheric infiltrating low-grade gliomas", link:  file164},
            { title: "Use of Gliadel (BCNU) Wafer in the Surgical Treatment of Malignant Glioma: A 10-Year Institutional Experience", link:  file165}
        ],
        2009: [
            { title: "Association of preoperative depression and survival after resection of malignant brain astrocytoma", link:  file166},
            { title: "Regression of intracranial meningioma following intratumoral hemorrhage", link:  file167},
            { title: "Independent association of extent of resection with survival  in patients with malignant brain astrocytoma", link:  file168},
            { title: "Gliadel (BCNU) wafer plus concomitant temozolomide  therapy after primary resection of glioblastoma multiforme", link:  file169},
            { title: "Inhibition of Akt inhibits growth of glioblastoma and  glioblastoma stem-like cells", link: file170},
            { title: "Local Controlled Delivery of Anti-Neoplastic RNAse to the Brain", link: file171}
        ],
        2010: [
            { title: "Complications and death among elderly patients undergoing pituitary tumour surgery", link:  file172},
            { title: "Combination of Intracranial Temozolomide With Intracranial Carmustine Improves Survival When Compared With Either Treatment Alone in a Rodent Glioma Model", link: file173},
            { title: "A thermal gel depot for local delivery of paclitaxel to treat experimental brain tumors in rats", link:  file174},
            { title: "Prognostic significance of contrast-enhancing anaplastic astrocytomas in adults", link: file175},
            { title: "Perioperative and Long-term Outcomes From the Management of Parasagittal Meningiomas Invading the Superior Sagittal Sinus", link: file176},
            { title: "Persistent outpatient hyperglycemia is independently associated with survival, recurrence and malignant degeneration following surgery for hemispheric low grade gliomas", link:  file177},
            { title: "Carmustine Wafers (Gliadel) Plus Concomitant Temozolomide Therapy After Resection of Malignant Astrocytoma: Growing Evidence for Safety and Efficacy", link: file178},
            { title: "Epirubicin exhibits potent anti-tumor activity in an animal model of malignant glioma when administered via controlled-release polymers", link: file179}
        ],
        2011: [
            { title: "Intracranial microcapsule drug delivery device for the treatment of an experimental gliosarcoma model", link:  file180},
            { title: "Preoperative Charlson Comorbidity Score Predicts Postoperative Outcomes Among Older Intracranial Meningioma Patients", link:  file181},
            { title: "Central Nervous System Cancers", link:  file182},
            { title: "Surgical outcomes for older patients with glioblastoma multiforme: preoperative factors associated with decreased survival", link:  file183},
            { title: "Factors involved in maintaining prolonged functional independence following supratentorial glioblastoma resection", link:  file184},
            { title: "Improvement in the standard treatment for experimental glioma by fusing antibody Fc domain to endostatin ", link:  file185},
            { title: "The efficacy of carmustine wafers for older patients with glioblastoma multiforme: prolonging survival", link:  file186},
            { title: "Supratentorial Glioblastoma Multiforme: The Role of Surgical Resection Versus Biopsy Among Older Patients", link:  file187},
            { title: "Local delivery of rapamycin: a toxicity and efficacy study in an experimental malignant glioma model in rats", link:  file188},
            { title: "Predictors of Inpatient Death and Complications among Postoperative Elderly Patients with Metastatic Brain Tumors", link:  file189}, 
            {title: "Harvey Cushing’s Open and Thorough Documentation of Surgical Mishaps at the Dawn of Neurologic Surgery", link: file190}
        ],
        2012: [
            { title: "Delayed onset of paresis in rats with experimental intramedullary spinal cord gliosarcoma following intratumoral administration of the paclitaxel delivery system OncoGel", link: file13 },
            { title: "Growth properties of SF188/V+ human glioma in rats in vivo observed by magnetic resonance imaging", link: file14 },
            { title: "Hyperglycemia is independently associated with post-operative function loss in patients with primary eloquent glioblastoma", link: file15 },
            { title: "Model T Muscle CARs Can Treat Brain Tumors", link: file16 },
            { title: "Suppression of Human Glioma Xenografts with SecondGeneration IL13R-Specific Chimeric Antigen Receptor–Modified T Cells", link: file17 },
            { title: "Intracranial MEMS based temozolomide delivery in a 9L rat gliosarcoma model", link: file18},
            { title: "Longitudinal in vivo monitoring of rodent glioma models through thinned skull using laser speckle contrast imaging", link: file19},
            { title: "Postoperative Mortality After Surgery for Brain Tumors by Patient Insurance Status in the United States", link: file20},
            { title: "Predictors of Visual Outcome Following Surgical Resection of Medial Sphenoid Wing Meningiomas", link: file21},
            { title: "Suppression of Human Glioma Xenografts with SecondGeneration IL13R-Specific Chimeric Antigen Receptor–Modified T Cells", link: file22 },
            { title: "The impact of bevacizumab on temozolomide concentrations in intracranial U87 gliomas", link: file23 }
        ],
        2013: [
            { title: "Anti-PD-1 Blockade and Stereotactic Radiation Produce Long-Term Survival in Mice With Intracranial Gliomas", link: file24 },
            { title: "Central Nervous System Cancers", link: file25 },
            { title: "Combination of anti-VEGF therapy and temozolomide in two experimental human glioma models", link: file26 },
            { title: "Combination of paclitaxel thermal gel depot with temozolomide and radiotherapy significantly prolongs survival in an experimental rodent glioma model", link: file27 },
            { title: "Deep venous thrombosis and pulmonary embolisms in adult patients undergoing craniotomy for brain tumors", link: file28 },
            { title: "Glioblastoma and surgery", link: file29 },
            { title: "Factors associated with survival for patients with glioblastoma with poor pre-operative functional status", link: file30 },
            { title: "Harvey Cushing’s Early Treatment of Meningiomas: The Untold Story", link: file31 },
            { title: "Identifying Better Surgical Candidates Among Recursive Partitioning Analysis Class 2 Patients who Underwent Surgery for Intracranial Metastases", link: file32 },
            { title: "Increased expression of glutamate transporter GLT-1 in peritumoral tissue associated with prolonged survival and decreases in tumor growth in a rat model of experimental malignant glioma", link: file33 },
            { title: "Microdialysis measurement of intratumoral temozolomide concentration after cediranib, a pan-VEGF receptor tyrosine kinase inhibitor, in a U87 glioma model", link: file34 },
            { title: "Multiple resections for patients with glioblastoma: prolonging survival", link: file35 },
            { title: "Glioblastoma and surgery", link: file262 },
            { title: "NY-ESO-1 Expression in Meningioma Suggests a Rationale for New Immunotherapeutic Approaches", link: file263 },
            { title: "Patients undergoing surgery of intracranial metastases have different outcomes based on their primary pathology", link: file264 },
            { title: "Predictors of Visual Outcome Following Surgical Resection of Medial Sphenoid Wing Meningiomas", link: file265 },
            { title: "Seizure Control for Patients Undergoing Meningioma Surgery", link: file266 },
            { title: "Survival and Recurrence for Patients Undergoing Surgery of Skull Base Intracranial Metastases", link: file267 },
            { title: "Vaccine strategies for glioblastoma: progress and future directions", link: file268 },

        ],
        2014: [
            { title: "Central Nervous System Cancers, Version 2.2014", link:  file269},
            { title: "Combination of anti-VEGF therapy and temozolomide in two experimental human glioma models", link:  file270},
            { title: "Detection of Circulating Tumor DNA in Early- and Late-Stage Human Malignancies", link:  file271},
            { title: "Efficacy of local polymer-based and systemic delivery of the anti-glutamatergic agents riluzole and memantine in rat glioma models", link:  file272},
            { title: "Emerging insights into barriers to effective brain tumor therapeutics", link:  file273},
            { title: "Establishing percent resection and residual volume thresholds affecting survival and recurrence for patients with newly diagnosed intracranial glioblastoma", link:  file274},
            { title: "Extravascular Optical Coherence Tomography: Evaluation of Carotid Atherosclerosis and Pravastatin Therapy", link:  file275},
            { title: "Factors associated with survival and recurrence for patients undergoing surgery of cerebellar metastases", link:  file276},
            { title: "Focal Radiation Therapy Combined with 4-1BB Activation and CTLA-4 Blockade Yields Long-Term Survival and a Protective Antigen-Specific Memory Response in a Murine Glioma Model", link:  file277},
            { title: "Identifying Better Surgical Candidates Among Recursive Partitioning Analysis Class 2 Patients who Underwent Surgery for Intracranial Metastases", link:  file278},
            { title: "Intracranial microcapsule chemotherapy delivery for the localized treatment of rodent metastatic breast adenocarcinoma in the brain", link:  file279},
            { title: "Local delivery of angiogenesis-inhibitor minocycline combined with radiotherapy and oral temozolomide chemotherapy in 9L glioma", link:  file280},
            { title: "Patient-Perceived Long-Term Communication and Swallow Function Following Cerebellopontine Angle Surgery", link:  file281},
            { title: "Intracranial microcapsule chemotherapy delivery for the localized treatment of rodent metastatic breast adenocarcinoma in the brain", link:  file282},
            { title: "Preoperative anemia increases postoperative morbidity in elective cranial neurosurgery", link:  file283},
            { title: "Radiosensitization of malignant gliomas following intracranial delivery of paclitaxel biodegradable polymer microspheres", link:  file284},
            { title: "Surgical outcomes of craniocervial junction meningiomas: A series of 22 consecutive patients", link:  file285}
        ],
        2015: [
            { title: "Immediate Single-Stage Cranioplasty Following Calvarial Resection for Benign and Malignant Skull Neoplasms Using Customized Craniofacial Implants", link:  file286},
            { title: "Central Nervous System Cancers, Version 1.2015", link:  file287},
            { title: "Delivery of local therapeutics to the brain: working toward advancing treatment for malignant gliomas", link:  file288},
            { title: "Detection of tumor-derived DNA in cerebrospinal fluid of patients with primary tumors of the brain and spinal cord", link:  file289},
            { title: "Inhibition of Corneal Neovascularization by Subconjunctival Injection of Fc-Endostatin, a Novel Inhibitor of Angiogenesis", link:  file290},
            { title: "Interstitial chemotherapy for malignant glioma: Future prospects in the era of multimodal therapy", link:  file291},
            { title: "Local delivery of cancer-cell glycolytic inhibitors in high-grade glioma", link:  file292},
            { title: "Metformin Inhibits Growth of Human Glioblastoma Cells and Enhances Therapeutic Response", link:  file293},
            { title: "MGMT inactivation and clinical response in newly diagnosed GBM patients treated with Gliadel", link:  file294},
            { title: "Polymeric Nanoparticles for Nonviral Gene Therapy Extend Brain Tumor Survival in Vivo", link:  file295},
            { title: "Risk of surgical site infection in 401 consecutive patients with glioblastoma with and without carmustine wafer implantation", link:  file296},
            { title: "Uniform brain tumor distribution and tumor associated macrophage targeting of systemically administered dendrimers.pdf", link:  file297}

        ],
        2016: [
            { title: "Agonist anti-GITR monoclonal antibody and stereotactic radiation induce immune-mediated survival advantage in murine intracranial glioma", link:  file298},
            { title: "Combination Therapy with Anti-PD-1, Anti-TIM-3, and Focal Radiation Results in Regression of Murine Gliomas", link:  file299},
            { title: "Discussion of Effect of Reflection of Temporalis Muscle During Cranioplasty With Titanium Mesh After Standard Trauma Craniectomy", link:  file300},
            { title: "Establishment and Biological Characterization of a Panel of Glioblastoma Multiforme (GBM) and GBM Variant Oncosphere Cell Lines", link:  file301},
            { title: "Highlights of Children with Cancer UK’s Workshop on Drug Delivery in Paediatric Brain Tumours", link:  file302},
            { title: "Anti–PD-1 antitumor immunity is enhanced by local and abrogated by systemic chemotherapy in GBM", link:  file303},
            { title: "Nanobiotechnology-based delivery strategies: New frontiers in brain tumor targeted therapies", link:  file304},
            { title: "Non-virally engineered human adipose mesenchymal stem cells produce BMP4, target brain tumors, and extend survival", link:  file305},
            { title: "Polylactic acid (PLA) controlled delivery carriers for biomedical applications", link:  file306},
            { title: "Anticoagulation for Hypercoagulable Patients Associated with Complications after Large Cranioplasty Reconstruction", link:  file307},
            { title: "Surgical complications following malignant brain tumor surgery: An analysis of 2002–2011 data", link:  file308},
            { title: "Syndrome of the Trephined: A Systematic Review", link:  file309},
            { title: "Synthesis, characterization, and self-assembly with plasmid DNA of aquaternary ammonium derivative of pectic galactan and its fluorescent labeling for bioimaging applications", link:  file310},
            { title: "Systemic Tolerance Mediated by Melanoma Brain Tumors Is Reversible by Radiotherapy and Vaccination", link:  file311},
            { title: "The effect of regadenoson-induced transient disruption of the blood–brain barrier on temozolomide delivery to normal rat brain", link:  file312},
            { title: "The Johns Hopkins Hunterian Laboratory Philosophy: Mentoring Students in a Scientific Neurosurgical Research Laboratory", link:  file313},
            { title: "Time Interval Reduction for Delayed Implant-Based Cranioplasty Reconstruction in the Setting of Previous Bone Flap Osteomyelitis", link:  file314}
        ],
        2017: [
            { title: "Anti–PD-1 antitumor immunity is enhanced by local and abrogated by systemic chemotherapy in GBM", link:  file315},
            { title: "Central Nervous System Cancers, Version 1.2017", link:  file316},
            { title: "Comparison of Complications, Trends, and Costs in Endoscopic vs Microscopic Pituitary Surgery: Analysis From a US Health Claims Database", link:  file317},
            { title: "Convection enhanced delivery of cisplatin-loaded brain penetrating nanoparticles cures malignant glioma in rats", link:  file318},
            { title: "Volume 96 Number 2S Supplement 2016", link:  file319},
            { title: "Defining Glioblastoma Resectability Through the Wisdom of the Crowd: A Proof-of-Principle Study", link:  file320},
            { title: "Developing Therapies for Brain Tumors: The Impact of the Johns Hopkins Hunterian Neurosurgical Research Laboratory", link:  file321},
            { title: "Discussion on: Usefulness of an Osteotomy Template for Skull Tumorectomy and Simultaneous Skull Reconstruction", link:  file322},
            { title: "HIF-1α- Targeting Acrifavine Provides Long Term Survival and Radiological Tumor Response in Brain Cancer Therapy", link:  file323},
            { title: "Metastatic Atypical and Anaplastic Meningioma: A Case Series and Review of the Literature", link:  file324},
            { title: "Risk Factors for Preoperative Seizures and Loss of Seizure Control in Patients Undergoing Surgery for Metastatic Brain Tumors", link:  file325},
            { title: "The efficacy of lapatinib and nilotinib in combination with radiation therapy in a model of NF2 associated peripheral schwannoma", link:  file326},
            { title: "Use of an anti-viral drug, Ribavirin, as an anti-glioblastoma therapeutic", link:  file327}
        ],
        2018: [
            { title: "Deferred Radiotherapy After Debulking of Non-functioning Pituitary Macroadenomas: Clinical Outcomes", link:  file191},
            { title: "Risk of Developing Postoperative Deficits Based on Tumor Location after Surgical Resection of an Intracranial Meningioma", link:  file192}
        ],
        2019: [
            { title: "Overall Survival in Malignant Glioma Is Significantly Prolonged by Neurosurgical Delivery of Etoposide and Temozolomide from a Thermo-Responsive Biodegradable Paste", link:  file193},
            { title: "Costs and Their Predictors in Transsphenoidal Pituitary Surgery", link:  file194},
            { title: "Full-Thickness Skin Grafting for Local Defect Coverage Following Scalp Adjacent Tissue Transfer in the Setting of Cranioplasty", link:  file195},
            { title: "Genome-wide investigation of intragenic DNA methylation identifies ZMIZ1 gene as a prognostic marker in glioblastoma and multiple cancer types", link:  file196},
            { title: "Impact of master’s degree attainment upon academic career placement in neurosurgery", link:  file197},
            { title: "Improving medical student recruitment to neurosurgery", link:  file198},
            { title: "Nonviral Polymeric Nanoparticles for Gene Therapy in Pediatric CNS Malignancies", link:  file199},
            { title: "Combination anti‑CXCR4 and anti‑PD‑1 immunotherapy provides survival beneft in glioblastoma through immune cell modulation of tumor microenvironment", link:  file200},
            { title: "Multi-layered core-sheath fiber membranes for controlled drug release in the local treatment of brain tumor", link:  file201},
            { title: "Sonolucent Cranial Implants: Cadaveric Study and Clinical Findings Supporting Diagnostic and Therapeutic Transcranioplasty Ultrasound", link:  file202},
            { title: "Transcranioplasty Ultrasound Through a Sonolucent Cranial Implant Made of Polymethyl Methacrylate: Phantom Study Comparing Ultrasound, Computed Tomography, and Magnetic Resonance Imaging", link:  file203}
        ],
        2020: [
            { title: "Minimally invasive therapeutic ultrasound: Ultrasound-guided ultrasound ablation in neuro-oncology", link:  file204},
            { title: "Effect of radiation therapy on overall survival following subtotal resection of adult pilocytic astrocytoma", link:  file205},
            { title: "Geographic Variation in Costs of Transsphenoidal Pituitary Surgery in the United States", link:  file206},
            { title: "Impact of COVID-19 on an Academic Neurosurgery Department: The Johns Hopkins Experience", link:  file207},
            { title: "Scalp Invasion by Atypical or Anaplastic Meningioma Is a Risk Factor for Development of Systemic Metastasis", link:  file208},
            { title: "Predictors of Nonroutine Discharge Disposition Among Patients with Parasagittal / Parafalcine Meningioma", link:  file209},
            { title: "Educational Program Rankings Are Independently Associated With Residents’ Academic Career Trajectoryin Neurological Surgery", link:  file210},
            { title: "Repurposing the FDA-Approved Antiviral Drug Ribavirin as Targeted Therapy for Nasopharyngeal Carcinoma", link:  file211},
            { title: "Minimizing cotton retention in neurosurgical procedures: which imaging modality can help?", link:  file212},
            { title: "First-In-Human Experience With Integration of Wireless Intracranial Pressure Monitoring Device Within a Customized Cranial Implant", link:  file213},
            { title: "Introducing Medical Students to the Burgeoning Field of Neuroplastic Surgery", link:  file214},
            { title: "Central Nervous System Cancers, Version 3.2020", link:  file215},
            { title: "The 5-factor modified frailty index: an effective predictor of mortality in brain tumor patients", link:  file216},
            { title: "Quantifying the utility of a multidisciplinary neuro-oncology tumor board", link:  file217},
            { title: "Novel therapeutics for brain tumors: current practice and future prospects", link:  file218},
            { title: "Risk of Complications in Primary Versus Revision-Type Cranioplasty", link:  file219},
            { title: "A systematic review and meta‑analysis of supratotal versus gross total resection for glioblastoma", link:  file220},
            { title: "Intraoperative Laser Speckle Contrast Imaging For Real-Time Visualization of Cerebral Blood Flow in Cerebrovascular Surgery: Results From Pre-Clinical Studies", link:  file221},
            { title: "Translucent Customized Cranial Implants Made of Clear Polymethylmethacrylate", link:  file222}

        ],
        2021: [
            { title: "Captopril inhibits Matrix Metalloproteinase-2 and extends survival as a temozolomide adjuvant in an intracranial gliosarcoma model ", link:  file223},
            { title: "Predicting High-Value Care Outcomes After Surgery for NoneSkull Base Meningiomas", link:  file224},
            { title: "Combination checkpoint therapy with anti-PD-1 and anti-BTLA results in a synergistic therapeutic effect against murine glioblastoma", link:  file225},
            { title: "Which medical schools produce the most neurosurgery residents? An analysis of the 2014–2020 cohort", link:  file226},
            { title: "Impact of international research fellows in neurosurgery: results from a single academic center", link:  file227},
            { title: "Synergy between glutamate modulation and anti–programmed cell death protein 1 immunotherapy for glioblastoma", link:  file228},
            { title: "The safety and efficacy of dexamethasone in the perioperative management of glioma patients", link:  file229},
            { title: "Preclinical efficacy of ribavirin in SHH and group 3 medulloblastoma", link:  file230},
            { title: "Targeting of cyclin-dependent kinases in atypical teratoid rhabdoid tumors with multikinase inhibitor TG02", link:  file231},
            { title: "Disulfiram and copper combination therapy targets NPL4, cancer stem cells and extends survival in a medulloblastoma model", link:  file232},
            { title: "Automatic detection of cotton balls during brain surgery: Where deep learning meets ultrasound imaging to tackle foreign objects", link:  file233},
            { title: "PD-1+ Monocytes Mediate Cerebral Vasospasm Following Subarachnoid Hemorrhage", link:  file234},
            { title: "Predictors of Academic Neurosurgical Career Trajectory among International Medical Graduates Training Within the United States", link:  file235},
            { title: "Development of new brain metastases in triple negative breast cancer", link:  file236},
            { title: "The role of anticoagulation for superior sagittal sinus thrombosis following craniotomy for resection of parasagittal/parafalcine meningiomas", link:  file237},
            { title: "P-selectin axis plays a key role in microglia immunophenotype and glioblastoma progression", link:  file238},
            { title: "The Impact of Hydrocephalus Shunt Devices on Quality of Life", link:  file239},
            { title: "The Neuroplastic Surgery Fellowship Experience : Where Tradition Meets Innovation", link:  file240},
            { title: "Mebendazole and temozolomide in patients with newly diagnosed high-grade gliomas: results of a phase 1 clinical trial", link:  file241}
        ],
        2022: [
            { title: "Combined intracranial Acriflavine, temozolomide and radiation extends survival in a rat glioma model", link:  file242},
            { title: "Impact of virtual vs. in-person interviews among neurosurgery residency applicants", link:  file243},
            { title: "Home Program Matching in Neurosurgical Residency Programs: A 7-Year Study", link:  file244},
            { title: "Cranioplasty Outcomes From 500 Consecutive Neuroplastic Surgery Patients", link:  file245},
            { title: "Cranioplasty With Customized Craniofacial Implants and Intraoperative Resizing for Single-Stage Reconstruction Following Oncologic Resection of Skull Neoplasms", link:  file246},
            { title: "First Experience With Postoperative Transcranial Ultrasound Through Sonolucent Burr Hole Covers in Adult Hydrocephalus Patients", link:  file247},
            { title: "Automatic detection of foreign body objects in neurosurgery using a deep learning approach on intraoperative ultrasound images: From animal models to first in-human testing", link:  file248},
            { title: "MCP-1/CCR2 axis inhibition sensitizes the brain microenvironment against melanoma brain metastasis progression", link:  file249},
            { title: "Recruitment of women in neurosurgery: a 7-year quantitative analysis", link:  file250},
            { title: "Clinical features and surgical outcomes of intracranial and spinal cord subependymomas", link:  file251},
            { title: "Predictors of surgical site infection in glioblastoma patients undergoing craniotomy for tumor resection", link:  file252},
            { title: "Patient Safety Indicator 04 Does Not Consistently Identify Failure to Rescue in the Neurosurgical Population", link:  file253},
            { title: "Predictors and Impact of Postoperative 30-Day Readmission in Glioblastoma", link:  file254},
            { title: "Reexamining the Role of Postoperative ICU Admission for Patients Undergoing Elective Craniotomy: A Systematic Review*", link:  file255}
        ],
        2023: [
            { title: "Deoxyhypusine hydroxylase: A novel therapeutic target differentially expressed in short-term vs long-term survivors of glioblastoma", link:  file256},
            { title: "Soluble PD-L1 reprograms blood monocytes to prevent cerebral edema and facilitate recovery after ischemic stroke", link:  file257},
            { title: "Self-assembling paclitaxel-mediated stimulation of tumor-associated macrophages for postoperative treatment of glioblastoma", link:  file258}
        ],
        2024: [
            { title: "The Hospital Frailty Risk Score Independently Predicts Postoperative Outcomes in Glioblastoma Patients", link:  file259},
            { title: "Ultrasound inhibits tumor growth and selectively eliminates malignant brain tumor in vivo", link: file260},
            { title: "GPR68-ATF4 signaling is a novel prosurvival pathway in glioblastoma activated by acidic extracellular microenvironment", link:  file261}
        ]
    };

    const [searchQuery, setSearchQuery] = useState("");
    const [expandedSections, setExpandedSections] = useState({});

    const filterLinks = (query, data) => {
        if (!query) return [];
        let filteredLinks = [];
        const titlesSet = new Set(); // To track unique titles

        Object.keys(data).forEach(year => {
            data[year].forEach(link => {
                if (link.title.toLowerCase().includes(query.toLowerCase()) && !titlesSet.has(link.title)) {
                    filteredLinks.push(link);
                    titlesSet.add(link.title); // Add title to the set
                }
            });
        });

        return filteredLinks;
    };

    const toggleSection = (year) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [year]: !prevState[year]
        }));
    };

    const filteredLinks = filterLinks(searchQuery, data);

    // Group years into columns
    const years = Object.keys(data);
    const groupedYears = [];
    const yearsPerColumn = 4;
    for (let i = 0; i < years.length; i += yearsPerColumn) {
        groupedYears.push(years.slice(i, i + yearsPerColumn));
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow">
                <div className="container mx-auto p-6 bg-white">
                    <div className="relative mb-4">
                        <input
                            type="text"
                            id="searchBar"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for specific papers"
                            className="w-full px-4 py-2 pl-10 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-3 text-gray-400"
                        />
                    </div>

                    {searchQuery ? (
                        <ul className="list-disc pl-5 mt-2">
                            {filteredLinks.length > 0 ? (
                                filteredLinks.map(link => (
                                    <li key={link.title}>
                                        <a href={link.link} className="text-blue-600 hover:underline">
                                            {link.title}
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <li>No matching papers found</li>
                            )}
                        </ul>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {groupedYears.map((yearGroup, index) => (
                                <div key={index} className="year-group">
                                    {yearGroup.map(year => (
                                        <div key={year} className="year-section mb-6">
                                            <div
                                                className="flex items-center cursor-pointer"
                                                onClick={() => toggleSection(year)}
                                            >
                                                <FontAwesomeIcon
                                                    icon={expandedSections[year] ? faChevronDown : faChevronRight}
                                                    className="mr-2"
                                                />
                                                <h2 className="text-xl font-bold">{year}</h2>
                                            </div>
                                            {expandedSections[year] && (
                                                <ul className="list-disc pl-5 mt-2">
                                                    {data[year].map(link => (
                                                        <li key={link.title}>
                                                            <a href={link.link} className="text-blue-600 hover:underline">
                                                                {link.title}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Database;
