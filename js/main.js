// Laws of SV — Gesetzesdatenbank
// Datenbasis: die vom Nutzer bereitgestellten S.A. STATE GOVERNMENT Gesetzesdateien.
// Die Texte werden nicht durch allgemeines deutsches/US-amerikanisches Recht ergänzt.

const laws = [
  {
    "id": "constitution",
    "title": "Constitution of San Andreas",
    "category": "Verfassung",
    "sourceFile": "S.A. STATE GOVERNMENT - Constitution of San Andreas.html",
    "sections": [
      {
        "number": "Artikel 1",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist die Verpflichtung aller staatlichen Gewalt. (2) Das Volk bekennt sich darum zu unverletzlichen und unveräußerlichen Menschenrechten als Grundlage jeder menschlichen Gemeinschaft, des Friedens und der Gerechtigkeit in der Welt. (3) Die nachfolgenden Grundrechte binden Gesetzgebung, vollziehende Gewalt und Rechtsprechung als unmittelbar geltendes Recht."
      },
      {
        "number": "Artikel 2",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Jeder hat das Recht auf die freie Entfaltung seiner Persönlichkeit, soweit er nicht die Rechte anderer verletzt und nicht gegen die verfassungsmäßige Ordnung verstößt. (2) Jeder hat das Recht auf Leben und körperliche Unversehrtheit. Die Freiheit der Person ist unverletzlich. In diese Rechte darf nur auf Grund eines Gesetzes eingegriffen werden."
      },
      {
        "number": "Artikel 3",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Alle Menschen sind vor dem Gesetz gleich. (2) Männer und Frauen sind gleichberechtigt. Der Staat fördert die tatsächliche Durchsetzung der Gleichberechtigung von Frauen und Männern und wirkt auf die Beseitigung bestehender Nachteile hin. (3) Niemand darf wegen seines Geschlechtes, seiner Abstammung, seiner Sprache, seiner Heimat und Herkunft, seines Glaubens, seiner religiösen oder politischen Anschauungen benachteiligt oder bevorzugt werden. Niemand darf wegen seiner Behinderung benachteiligt werden."
      },
      {
        "number": "Artikel 4",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Die Freiheit des Glaubens, des Gewissens und die Freiheit des religiösen und weltanschaulichen Bekenntnisses sind unverletzlich. (2) Die ungestörte Religionsausübung wird gewährleistet. (3) Eingriffe sind nur zulässig, soweit dies gesetzlich vorgesehen und zwingend erforderlich ist."
      },
      {
        "number": "Artikel 5",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Jeder hat das Recht, seine Meinung in Wort, Schrift und Bild frei zu äußern, zu verbreiten und sich aus allgemein zugänglichen Quellen ungehindert zu unterrichten. Die Pressefreiheit und die Freiheit der Berichterstattung durch die Presse werden gewährleistet. Eine Zensur findet nicht statt. (2) Diese Rechte finden ihre Schranken in den Vorschriften der allgemeinen Gesetze und in dem Recht der persönlichen Ehre. (3) Kunst und Wissenschaft, Forschung und Lehre sind frei. Die Freiheit der Lehre entbindet nicht von der Treue zur Verfassung."
      },
      {
        "number": "Artikel 6",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Alle Bürger von San Andreas haben das Recht, sich ohne Anmeldung oder Erlaubnis in friedlicher und gesetzmäßiger Gesinnung ohne Waffen zu versammeln. (2) Für Versammlungen unter freiem Himmel kann dieses Recht aufgrund eines Gesetzes beschränkt werden."
      },
      {
        "number": "Artikel 7",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Das Eigentum und das Erbrecht werden gewährleistet. Inhalt und Schranken werden durch die Gesetze bestimmt. (2) Eigentum verpflichtet. Sein Gebrauch soll zugleich dem Wohle der Allgemeinheit dienen. (3) Eine Enteignung ist nur zum Wohle der Allgemeinheit zulässig. Sie darf nur durch Gesetz oder auf Grund eines Gesetzes erfolgen."
      },
      {
        "number": "Artikel 8",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Die Wohnung ist unverletzlich. (2) In dieses Recht darf nur aufgrund eines Gesetzes eingegriffen werden."
      },
      {
        "number": "Artikel 9",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Alle Bürger haben das Recht, Beruf und Arbeitsplatz frei zu wählen. Die Berufsausübung kann durch Gesetz oder auf Grund eines Gesetzes geregelt werden. (2) Zwangsarbeit ist nur bei einer gerichtlich angeordneten Freiheitsentziehung zulässig. (3) In dieses Recht darf nur aufgrund eines Gesetzes eingegriffen werden ."
      },
      {
        "number": "Artikel 10",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Vor Gericht hat jedermann Anspruch auf rechtliches Gehör. Jeder hat Anspruch auf ein faires Verfahren. (2) In dieses Recht darf nur auf Grund eines Gesetzes eingegriffen werden. (3) Niemand darf wegen derselben Tat auf Grund der allgemeinen Strafgesetze mehrmals bestraft werden."
      },
      {
        "number": "Artikel 11",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "Verletzt jemand in Ausübung eines ihm anvertrauten öffentlichen Amtes die ihm einen Dritten gegenüber obliegende Amtspflicht, so trifft die Verantwortlichkeit grundsätzlich den Staat oder die Körperschaft, in deren Dienst er steht. Bei Vorsatz oder grober Fahrlässigkeit bleibt der Rückgriff vorbehalten. Für den Anspruch auf Schadensersatz und für den Rückgriff darf der ordentliche Rechtsweg nicht ausgeschlossen werden."
      },
      {
        "number": "Artikel 12",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Handlungen, die geeignet sind und in der Absicht vorgenommen werden, das friedliche Zusammenleben des Volkes zu stören, insbesondere die Führung eines Angriffskrieges vorzubereiten, sind verfassungswidrig. Sie sind strafbar und durch Gesetz zu regeln. (2) Zur Kriegführung bestimmte Waffen dürfen nur mit Genehmigung der Regierung hergestellt, befördert und in Verkehr gebracht werden."
      },
      {
        "number": "Artikel 13",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Soweit nach dieser Verfassung ein Grundrecht durch Gesetz oder aufgrund eines Gesetzes eingeschränkt werden kann, muss das Gesetz allgemein und nicht nur für den Einzelfall gelten. (2) In keinem Falle darf ein Grundrecht in seinem Wesensgehalt angetastet werden. (3) Die Grundrechte gelten auch für inländische juristische Personen, soweit sie ihrem Wesen nach auf diese anwendbar sind. (4) Wird jemand durch die öffentliche Gewalt in seinen Rechten verletzt, so steht ihm der Rechtsweg offen. Soweit eine andere Zuständigkeit nicht begründet ist, ist der ordentliche Rechtsweg gegeben. (5) Einschränkungen von Grundrechten unterliegen der gerichtlichen Überprüfung."
      },
      {
        "number": "Artikel 14",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "Die Bevölkerung ist über alle Änderungen am Gesetzestext zu informieren. Dies gilt nicht für redaktionelle Änderungen."
      },
      {
        "number": "Artikel 15",
        "title": "",
        "chapter": {
          "number": "I.",
          "title": "Die Grundrechte"
        },
        "text": "(1) Wer zum Kampfe gegen die freiheitliche demokratische Grundordnung aufruft, einen solchen Kampf unterstützt oder führt, verwirkt diese Grundrechte. (2) Die Verwirkung und ihr Ausmaß werden durch den Supreme Attorney auf Grundlage eines Gesetzes und in Abstimmung mit dem Governor ausgesprochen. Das Nähere regelt ein Gesetz."
      },
      {
        "number": "Artikel 16",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) San Andreas ist ein demokratischer Bundess taat. (2) Die Gesetzgebung ist an die verfassungsmäßige Ordnung, die vollziehende Gewalt und die Rechtsprechung an Gesetz und Recht gebunden."
      },
      {
        "number": "Artikel 17",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Der Bundesstaat San Andreas ist in Form der dualen Gewaltenteilung organisiert . Er teilt sich demnach ausschließlich in Exekutive und Judikative. Die Gesetzgebung erfolgt durch den Governor in Abstimmung mit dem Supreme Attorney. (2) Die Exekutive ist die vollziehende Gewalt. Sie führt bestehende Gesetze aus und gewährleistet deren Einhaltung. (3) Die Judikative ist die rechtsprechende Gewalt ; ihr gehört ausschließlich die Richterschaft an. Richter interpretieren das Gesetz zur Entscheidung von Rechtsstreiten."
      },
      {
        "number": "Artikel 18",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Der Governor ist das Staatsoberhaupt und der Regierungschef von San Andreas. (2) Der Governor hat absolute Weisungsbefugnis in ausnahmslos allen Staatsangelegenheiten. (3) Zur Gewährleistung von Integrität und Stabilität des Rechtssystems wird ein Supreme Attorney eingesetzt. Der Supreme Attorney ist der oberste Exekutivbeamte des Staates und leitet im Auftrag des Governors als dessen Bevollmächtigter das Department of Justice; er ist zudem oberster Ankläger des Staates in besonders schwerwiegenden Fällen, es sei denn, er delegiert die Anklage an den Attorney General. Der Supreme Attorney hat das absolute Evokationsrecht in allen Rechtsangelegenheiten des Staates; dies umfasst insbesondere aber nicht ausschließlich: den Erlass, die Aufhebung und Abänderung von strafrechtlichen Maßnahmen, sofern nicht die Richterschaft eine Entscheidung treffen kann, die Begnadigung von rechtskräftig verurteilten Straftätern, sofern er nicht selbst Ankläger in dem betreffenden Fall war, und den Erlass, die Aufhebung und Abänderung von sonstigen Maßnahmen, die der Wahrung und Einhaltung von Recht und Gesetz dienen. Weitere Maßnahmen, die nicht in die Aufzählung des Satzes 3 fallen, sind möglich. Sie bedürfen einer Abstimmung des Supreme Attorney mit dem Governor. Die Richterschaft kann insbesondere dann Entscheidungen nicht treffen, wenn sie personell unterbesetzt ist. (4) Unter dem Dach des Department of Justice arbeiten die Staatsanwaltschaft (als oberste Strafverfolgungsbehörde) und die unabhängige Richterschaft. Die Unabhängigkeit des Richteramtes wird gewährleistet. Die Richterschaft entscheidet letztinstanzlich über straf-, zivil- und öffentlich-rechtliche Streitigkeiten. Absatz 3 bleibt, insbesondere hinsichtlich der Befugnisse des Supreme Attorney, unberührt. (5) Wird ein rechtskräftig verurteilter Straftäter durch den Supreme Attorney begnadigt, ist er so zu stellen, als hätte er die Tat nicht begangen. Die Strafakte wird jedoch nicht gelöscht, sondern mit dem Vermerk “BEGNADIGT” versehen. Begnadigte Straftäter dürfen wegen derselben Tat (auch bei Auftreten neuer Erkenntnisse) nicht mehr verfolgt werden. Zuwiderhandlung durch die zuständigen Strafverfolgungsbehörden stellt Amtsmissbrauch dar. Eine Begnadigung durch den Supreme Attorney bedarf der Schriftform und ist der Bevölkerung öffentlich bekanntzugeben. (6) Wird ein Exekutivbeamter zu einer Haftstrafe von mindestens 90 Hafteinheiten verurteilt, ist er mit dem Tag der Rechtskraft des Urteils entlassen und darf erst nach Ablauf von mindestens 3 Wochen nach der Entlassung und im Übrigen sauberer Akte wieder eingestellt werden."
      },
      {
        "number": "Artikel 19",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Zur Wahrung der Interessen aller Bürger des Staates wird für die Einreichung von Empfehlungen für den Erlass, die Änderung und Aufhebung von Gesetzen sowie für die Entscheidung über die Entlassung von Richtern ein Legal Council eingerichtet. Dem Legal Council gehören an: der Supreme Attorney (als Vorsitzender), der Chief Justice (als stellvertretender Vorsitzender), der leitende Beamte des Los Santos Police Department, der leitende Beamte des Blaine County Sheriff Office, die leitende Position des Los Santos Medical Department und die leitende Position des Los Santos Fire Department. Die Mitglieder des Legal Council (Ratsmitglieder) können einen Vertreter zu den Sitzungen entsenden, wenn sie selbst verhindert sind. (2) Der Legal Council kann Empfehlungen nur aussprechen, wenn er beschlussfähig ist. Beschlussfähig ist der Legal Council, wenn mindestens drei seiner Mitglieder (wovon eines der Vorsitzende oder dessen Stellvertreter sein muss) zur Sitzung anwesend sind. Zu den Sitzungen kann nur der Vorsitzende oder dessen Stellvertreter einladen. ( 3 ) Empfehlungen für Gesetzesänderungen bedürfen eines Ratsbeschlusses mit mindestens einfacher Mehrheit des Legal Council. Empfehlungen für die Änderung der Verfassung bedürfen einer Zwei-Drittelmehrheit des Legal Council. (4) Einer Empfehlung des Legal Council soll grundsätzlich gefolgt werden. Stellt der Supreme Attorney die Verfassungswidrigkeit einer Gesetzesempfehlung oder eine Gefährdung der freiheitlichen demokratischen Grundordnung durch eine Empfehlung zur Änderung der Verfassung fest, muss der Empfehlung nicht gefolgt werden. Die Feststellung nach Satz 1 ist schriftlich abzufassen. ( 5 ) Rechtschreib-, Zeichensetzungs- sowie Grammatikfehler (redak tionelle Änderungen) können jederzeit durch Supreme Attorney v orgenommen werden. (6) Gesetze treten mit ihrer ordnungsgemäßen Veröffentlichung in Kraft."
      },
      {
        "number": "Artikel 20",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Richter werden durch den Supreme Attorney ernannt. (2) Richter sind in der Ausübung ihres Amtes unabhängig und an Weisungen nicht gebunden; dies gilt auch für Weisungen des Supreme Attorneys. Der Chief Justice ist der oberste Richter des Bundesstaates San Andreas und gibt den Rahmen für die richterliche Tätigkeit vor, wobei der Kern der richterlichen Entscheidungsunabhängigkeit nicht berührt werden darf. Der Chief Justice wird durch den Supreme Attorney ernannt. (3) Wird ein Richter wegen einer Straftat zu einer Haftstrafe von mindestens 90 Hafteinheiten verurteilt, ist er mit dem Tag der Rechtskraft des Urteils entlassen. Gleiches gilt für den Tag der Feststellung einer groben Pflichtverletzung des Richters durch den Legal Council. (4) Ist das Verhalten eines Richter grob pflichtwidrig, kann jeder Bürger eine Beschwerde beim Legal Council erheben. Der Legal Council ermittelt auf Basis der Beschwerde be- und entlastend und trifft abschließend die Entscheidung über die Feststellung des Vorliegens einer groben Pflichtverletzung nach Absatz 3 Satz 2. Bei der Entscheidung ist auf die Schwere der Pflichtverletzung sowie auf das gesamte dienstliche und außerdienstliche Verhalten des Richters abzustellen. Insbesondere sind zu berücksichtigen: das Maß der Pflichtwidrigkeit, das Ausmaß des innerdienstlichen Vertrauensschadens und des außerdienstlichen Ansehensverlustes, die Auswirkung der Pflichtverletzung auf den Dienstbetrieb, die weitere dienstliche Verwendbarkeit des Richters, die dem Amt des Richters innewohnende Verantwortung und Vorbildfunktion, der Grad des Verschuldens, die Tatmotive und Tatumstände, das Verhalten des Richters nach der Tat, insbesondere ihr oder sein freiwilliges Bemühen, entstandenen Schaden wiedergutzumachen und einen Ausgleich mit der oder dem Verletzten zu erreichen, die bisherige und die künftig zu erwartende dienstliche Leistung und Führung des Richters und eine tätige Reue des Richters durch ihre oder seine aktive Mitwirkung an der Aufdeckung, Aufklärung oder Verhinderung dienstrechtsrelevanter Straftaten, die im Zusammenhang mit ihrem oder seinem Dienstvergehen standen."
      },
      {
        "number": "Artikel 21",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Ein San Andreas Einwohner ist, wer im Besitz einer gültigen Greencard oder eines amtlichen Personalausweises des Staates San Andreas ist. (2) Die Staatsbürgerschaft kann erworben werden durch: Geburt auf dem Staatsgebiet, Anerkennung durch das Department of Justice, Einbürgerung gemäß Aufenthaltsgesetz. (3) Der Verlust der Staatsbürgerschaft tritt ein durch: freiwilligen Verzicht, Erwerb einer fremden Staatsangehörigkeit, Entzug aufgrund rechtskräftiger gerichtlicher Entscheidung."
      },
      {
        "number": "Artikel 22",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Bei außergewöhnlichen Gefahren für die öffentliche Ordnung oder Sicherheit kann der Legal Council den Notstand (DEFCON) ausrufen. Das nähere wird durch ein Gesetz geregelt. (2) Der Notstand endet automatisch nach 14 Tagen, sofern er nicht verlängert wird. Der Legal Council ist befugt, die Ausrufung des Notstandes zurückzunehmen."
      },
      {
        "number": "Artikel 23",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Die Höchstfreiheitsstrafe beträgt 120 Hafteinheiten. (2) Die Höchstgeldstrafe beträgt $550.000. (3) Das Höchstmaß für Sozialstunden beträgt 60 Einheiten."
      },
      {
        "number": "Artikel 24",
        "title": "",
        "chapter": {
          "number": "II.",
          "title": "Staatsorganisation"
        },
        "text": "(1) Diese Verfassung tritt mit ihrer Veröffentlichung im Gesetzesregister in Kraft. (2) Alle bisherigen Gesetze bleiben in Kraft, soweit sie nicht dieser Verfassung widersprechen."
      }
    ]
  },
  {
    "id": "civil",
    "title": "Civil Code",
    "category": "Zivilrecht",
    "sourceFile": "S.A. STATE GOVERNMENT - Civil Code.html",
    "sections": [
      {
        "number": "§ 1",
        "title": "Anwendungsbereich",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Dieses Gesetz findet Anwendung auf alle Rechtsverhältnisse, die nicht oder nicht ausschließlich durch andere Rechtsgebiete geregelt sind. Es regelt das Privatrecht. (2) Dieses Gesetz gilt im gesamten Staatsgebiet von San Andreas."
      },
      {
        "number": "§ 2",
        "title": "Vertrag",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Der Vertrag ist ein Rechtsgeschäft, das aus inhaltlich übereinstimmenden, mit Bezug aufeinander abgegebenen Willenserklärungen von mindestens zwei Personen besteht."
      },
      {
        "number": "§ 3",
        "title": "Auslegung und Gestaltung von Verträgen",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Verträge sind fair für beide Parteien zu gestalten und auszulegen (Grundsatz von Treu und Glauben)."
      },
      {
        "number": "§ 4",
        "title": "Rücktritt vom Vertrag",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Ein Rücktritt vom Vertrag ist zulässig, wenn eine vereinbarte Leistung nicht oder nicht vertragsgemäß erbracht wird oder wenn ein vertraglich vereinbartes Rücktrittsrecht besteht."
      },
      {
        "number": "§ 5",
        "title": "Notarielle Beurkundung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "( 1) Verträge können notariell beurkundet werden. Hierbei genügt es, wenn zunächst der Antrag und sodann die Annahme des Antrags von einem Notar beurkundet wird. (2) Sofern es gesetzlich vorgesehen ist, werden auch alle anderen Schriftstücke notariell beurkundet. Hierfür muss das Gesetz auf diese Vorschrift verweisen. (3) Als notariell beurkundet gelten nur Schriftstücke, die ein Notar persönlich unterschrieben und gesiegelt hat. (4) Eine notarielle Beurkundung bestätigt die Echtheit der Erklärung und die Identität der Beteiligten, nicht jedoch die inhaltliche Richtigkeit."
      },
      {
        "number": "§ 6",
        "title": "Widerrufsrecht",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Ein Widerrufsrecht besteht nur, wenn es gesetzlich vorgesehen oder vertraglich vereinbart ist."
      },
      {
        "number": "§ 7",
        "title": "Anfechtbarkeit wegen Irrtums",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Wer bei der Abgabe einer Willenserklärung über deren Inhalt im Irrtum war oder eine Erklärung dieses Inhalts überhaupt nicht abgeben wollte, kann die Erklärung anfechten, wenn anzunehmen ist, dass er sie bei Kenntnis der Sachlage und bei verständiger Würdigung des Falles nicht abgegeben haben würde. (2) Als Irrtum über den Inhalt der Erklärung gilt auch der Irrtum über solche Eigenschaften der Person oder der Sache, die im Verkehr als wesentlich angesehen werden."
      },
      {
        "number": "§ 8",
        "title": "Anfechtbarkeit wegen falscher Übermittlung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Eine Willenserklärung, welche durch die zur Übermittlung verwendete Person oder Einrichtung unrichtig übermittelt worden ist, kann unter der gleichen Voraussetzung angefochten werden wie nach § 7 dieses Gesetzes irrtümlich abgegebene Willenserklärung."
      },
      {
        "number": "§ 9",
        "title": "Anfechtungsfrist",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Die Anfechtung muss in den Fällen der §§ 8, 9 ohne schuldhaftes Zögern (unverzüglich) erfolgen, nachdem der Anfechtungsberechtigte von dem Anfechtungsgrund Kenntnis erlangt hat. (2) Die Anfechtung ist ausgeschlossen, wenn seit der Abgabe der Willenserklärung eine unangemessen lange Zeit vergangen ist."
      },
      {
        "number": "§ 10",
        "title": "Anfechtbarkeit wegen Täuschung oder Drohung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Wer zur Abgabe einer Willenserklärung durch arglistige Täuschung oder widerrechtlich durch Drohung bestimmt worden ist, kann die Erklärung anfechten."
      },
      {
        "number": "§ 11",
        "title": "Wirkung der Anfechtung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Wird ein anfechtbares Rechtsgeschäft angefochten, so ist es als von Anfang an nichtig anzusehen."
      },
      {
        "number": "§ 12",
        "title": "Vollmacht",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Mit einer Vollmacht kann eine Person jemand anderen dazu berechtigen, Willenserklärungen für diese Person abzugeben. Eine über eine Vollmacht für die Person abgegebene Willenserklärung wirkt unmittelbar für und gegen diese Person. (2) Die Erteilung der Vollmacht erfolgt durch Erklärung gegenüber dem zu Bevollmächtigenden."
      },
      {
        "number": "§ 13",
        "title": "Vollmachtsurkunde",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Eine Vollmacht soll schriftlich erfolgen, sofern nicht besondere Umstände eine andere Form rechtfertigen. Grundsätze des Schuldverhältnisses"
      },
      {
        "number": "§ 14",
        "title": "Grundsatz",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Schuldverhältnisse können durch Vertrag oder durch Gesetz entstehen. (2) Zur Begründung eines Schuldverhältnisses mit Pflichten nach § 24 dieses Gesetzes reichen bereits Vertragsverhandlungen und auch mündliche Abreden. (3) Schuldner ist der, der eine Leistung (Vertragsgegenstand) schuldet. (4) Gläubiger ist der, dem eine Leistung (Vertragsgegenstand) geschuldet wird."
      },
      {
        "number": "§ 15",
        "title": "Allgemeine Pflichten aus dem Schuldverhältnis",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Kraft des Schuldverhältnisses ist der Gläubiger berechtigt, von dem Schuldner eine Leistung zu fordern. Die Leistung kann auch in einem Unterlassen bestehen. (2) Das Schuldverhältnis kann nach seinem Inhalt jeden Teil zur Rücksicht auf die Rechte, Rechtsgüter und Interessen des anderen Teils verpflichten."
      },
      {
        "number": "§ 16",
        "title": "Leistung nach Treu und Glauben",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Der Schuldner ist verpflichtet, die Leistung so zu bewirken, wie Treu und Glauben mit Rücksicht auf die Verkehrssitte es erfordern. Satz 1 meint insbesondere den fairen Umgang der Vertragsparteien miteinander im Rahmen der gegenseitigen Pflichterfüllung."
      },
      {
        "number": "§ 17",
        "title": "Gattungsschuld",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Wer eine nur der Gattung nach bestimmte Sache schuldet, hat eine Sache von mittlerer Art und Güte zu leisten. (2) Hat der Schuldner das zur Leistung Erforderliche getan, beschränkt sich das Schuldverhältnis auf diese konkret bestimmte Sache."
      },
      {
        "number": "§ 18",
        "title": "Art und Umfang des Schadensersatzes",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Wer zum Schadensersatz verpflichtet ist, hat den Zustand herzustellen, der bestehen würde, wenn der zum Ersatz verpflichtende Umstand nicht eingetreten wäre. (2) Ist wegen Verletzung einer Person oder wegen Beschädigung einer Sache Schadensersatz zu leisten, so kann der Gläubiger statt der Herstellung den dazu erforderlichen Geldbetrag verlangen."
      },
      {
        "number": "§ 19",
        "title": "Schadensersatz in Geld",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Soweit die Herstellung nicht möglich oder zur Entschädigung des Gläubigers nicht genügend ist, hat der Ersatzpflichtige den Gläubiger in Geld zu entschädigen. (2) Der Ersatzpflichtige kann den Gläubiger in Geld entschädigen, wenn die Herstellung nur mit unverhältnismäßigen Aufwendungen möglich ist."
      },
      {
        "number": "§ 20",
        "title": "Mitverschulden",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Hat bei der Entstehung des Schadens ein Verschulden des Beschädigten mitgewirkt, so hängt die Verpflichtung zum Ersatz sowie der Umfang des zu leistenden Ersatzes von den Umständen, insbesondere davon ab, inwieweit der Schaden vorwiegend von dem einen oder dem anderen Teil verursacht worden ist. (2) Dies gilt auch dann, wenn sich das Verschulden des Beschädigten darauf beschränkt, dass er es unterlassen hat. den Schuldner auf die Gefahr eines ungewöhnlich hohen Schadens aufmerksam zu machen, die der Schuldner weder kannte noch kennen musste, oder dass er unterlassen hat, den Schaden abzuwenden oder zu mindern."
      },
      {
        "number": "§ 21",
        "title": "Ausschluss der Leistungspflicht (Unmöglichkeit)",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Der Anspruch auf Leistung ist ausgeschlossen, soweit diese für den Schuldner oder für jedermann unmöglich ist. (2) Der Schuldner kann die Leistung verweigern, soweit diese einen Aufwand erfordert, der unter Beachtung des Inhalts des Schuldverhältnisses und der Gebote von Treu und Glauben (fairer Umgang miteinander) in einem groben Missverhältnis zu dem Leistungsinteresse des Gläubigers steht. (3) Der Schuldner kann die Leistung ferner verweigern, wenn der die Leistung persönlich zu erbringen hat und sie ihm unter Abwägung des seiner Leistung entgegenstehenden Hindernisses mit dem Leistungsinteresse des Gläubigers nicht zugemutet werden kann."
      },
      {
        "number": "§ 22",
        "title": "Verantwortlichkeit des Schuldners",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Der Schuldner hat Vorsatz und Fahrlässigkeit zu vertreten, wenn eine strengere oder mildere Haftung weder bestimmt noch aus dem sonstigen Inhalt des Schuldverhältnisses zu entnehmen ist. (2) Fahrlässig handelt, wer die im Verkehr erforderliche Sorgfalt außer Acht lässt."
      },
      {
        "number": "§ 23",
        "title": "Schadensersatz wegen Pflichtverletzung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Verletzt der Schuldner eine Pflicht aus dem Schuldverhältnis, so kann der Gläubiger Ersatz des hierdurch entstehenden Schadens verlangen. Dies gilt nicht, wenn der Schuldner die Pflichtverletzung nicht zu vertreten hat. (2) Braucht der Schuldner wegen Unmöglichkeit nicht zu leisten, kann der Gläubiger Schadensersatz statt der Leistung verlangen. Gesetzliche Schuldverhältnisse"
      },
      {
        "number": "§ 24",
        "title": "Schadensersatzpflicht bei vertragslosem Aufeinandertreffen",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Wer vorsätzlich oder fahrlässig das Leben, den Körper, die Gesundheit, die Freiheit, das Eigentum oder ein sonstiges Recht eines anderen widerrechtlich verletzt, ist dem anderen zum Ersatz des daraus entstehenden Schadens verpflichtet. (2) Die gleiche Verpflichtung trifft denjenigen, welcher gegen ein den Schutz eines anderen bezweckendes Gesetz verstößt. III. Familienrecht Ehe"
      },
      {
        "number": "§ 25",
        "title": "Begriff der Ehe",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Die Ehe ist die freie Vereinigung zweier Personen zu einer auf Dauer angelegten Lebensgemeinschaft, in welcher beide Partner gleichberechtigt sind und die Gestaltung des Zusammenlebens frei entscheiden können."
      },
      {
        "number": "§ 26",
        "title": "Eheverbote",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Die Ehe darf nicht geschlossen werden, wenn bei einer der beiden Personen bereits eine Ehe mit einer Person besteht. Mehrehen sind unzulässig. (2) Ein Eheschluss zwischen Verwandten in gerader Linie, sowie zwischen Geschwistern ist unzulässig. (3) Eine Ehe ist unzulässig, wenn die Verwandtschaft durch Adoption besteht, sofern kein Ausnahmefall vorliegt."
      },
      {
        "number": "§ 27",
        "title": "Schließung der Ehe durch Vertrag",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Die Eheschließung erfolgt durch einen Vertrag. Der Vertrag muss durch beide Ehepartner, zwei Trauzeugen und einem Beamten mit notarieller Befähigung (Standesbeamter) unterschrieben werden. (2) Durch die Eheschließung werden beide Ehepartner verpflichtet, sich gegenseitig finanziell, durch Sachleistung und auf sonstige Weise zu unterstützen, bis der Tod oder das Gesetz sie scheidet. Ferner hat die Eheschließung zur Folge, dass eine Adoption nach Eheschließung durch einen Ehepartner dazu führt, dass der Adoptierte ebenfalls durch den anderen Ehepartner adoptiert gilt. (3) Durch die Eheschließung ist einem Ehepartner gestattet, im Einvernehmen mit dem anderen Ehepartner dessen Nachnamen anzunehmen. Erfolgt dies, so nehmen adoptierte Nachkommen den Nachnamen des Ehepartners an, dessen Nachname der andere Ehepartner angenommen hat."
      },
      {
        "number": "§ 28",
        "title": "Nichtigkeit der Eheschließung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Eine Ehe ist nichtig, wenn einer der Ehegatten zur Zeit der Eheschließung geschäftsunfähig war oder sich im Zustand der Bewusstlosigkeit oder vorübergehenden Störung der Geistestätigkeit befand. (2) Eine Ehe ist nichtig, wenn die Ehe gegen die § 26 genannten Bestimmungen verstößt. (3) Auf die Nichtigkeit der Ehe kann sich erst nach einer erfolgreichen Zivilklage berufen werden."
      },
      {
        "number": "§ 29",
        "title": "Ehescheidung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Eine Ehe kann nur durch richterliche Entscheidung oder Entscheidung des Chief Justice oder Deputy Chief Justice auf Antrag eines der beiden Ehegatten geschieden werden, wenn die Ehe gescheitert ist. (2) Eine Ehe gilt als gescheitert, wenn die Lebensgemeinschaft der Ehegatten nicht mehr besteht und nicht zu erwarten ist, dass die Ehegatten sie wiederherstellen können. Eine Scheidung ist ebenfalls möglich, wenn die Fortsetzung der Ehe für einen der beiden Ehepartner eine unzumutbare Belastung darstellen würde."
      },
      {
        "number": "§ 30",
        "title": "Rechtsfolgen der Ehescheidung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Die Ehescheidung hat zur Folge, dass die Pflichten aus § 27 Absatz 2 für beide ehemaligen Ehepartner mit Rechtskraft der Ehescheidung entfallen. (2) Eine Abfindungszahlung kann durch das Gericht festgelegt werden, wenn dies unter Berücksichtigung der Umstände angemessen ist."
      },
      {
        "number": "§ 31",
        "title": "Abfindungszahlung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "Die Höhe bestimmt das Gericht nach Billigkeit. Adoption"
      },
      {
        "number": "§ 32",
        "title": "Zulässigkeit der Adoption",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Die Adoption ist nur zulässig, wenn sie dem Wohl des zu adoptierenden dient und zu erwarten ist, dass zwischen dem Annehmenden und dem zu adoptierenden ein familiäres Verhältnis entsteht. Diese Anforderungen sind durch die Justiz von Amts wegen zu überprüfen. Bevor eine Adoption durchgeführt werden kann, muss ein Beratungsgespräch mit der Justiz stattgefunden haben, im Rahmen dessen alle Parteien über die Rechtsfolgen der Adoption belehrt werden. (2) Eine Adoption ist zulässig, wenn sie dem Wohl der betroffenen Person dient. (3) Die Adoption muss auf einem Adoptionsbekenntnis von allen Parteien und einem Beamten mit notarieller Befähigung unterschrieben werden, um wirksam zu sein. (4) Eine einmal durchgeführte Adoption kann nicht rückgängig gemacht werden, es sei denn, eine Adoptionspartei ist über die Richtigkeit von Angaben arglistig getäuscht worden. Die arglistige Täuschung kann nur durch einen Richter festgestellt werden."
      },
      {
        "number": "§ 33",
        "title": "Rechtsfolgen der Adoption",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "( 1) Durch die Adoption werden die Adoptionsparteien zu Familienangehörigen direkter Linie. Es gelten die gleichen Rechte und Pflichten wie für leibliche Familienangehörige. (2) Durch die Adoption nimmt der Adoptierte den Nachnamen des Adoptierenden an. Namensänderungen"
      },
      {
        "number": "§ 34",
        "title": "Voraussetzungen der Namensänderung",
        "chapter": {
          "number": "II.",
          "title": "Vertragsrecht"
        },
        "text": "(1) Der Name ist Teil des Persönlichkeitsrechts und kann auf Antrag geändert werden, wenn ein berechtigter Grund vorliegt. (2) Ein berechtigter Grund liegt insbesondere vor, wenn: a) der bisherige Name zu Nachteilen für die betroffene Person führt, b) familiäre oder persönliche Gründe eine Änderung rechtfertigen oder c) ein sonstiger nachvollziehbarer Anlass besteht. (3) Die Entscheidung über die Namensänderung trifft die zuständige Behörde oder das Gericht nach pflichtgemäßem Ermessen. (4) Die Namensänderung wird mit Ausstellung einer entsprechenden Urkunde wirksam. (5) Eine Namensänderung kann nur einmal erfolgen, sofern keine besonderen Umstände eine weitere Änderung rechtfertigen."
      },
      {
        "number": "§ 35",
        "title": "Rechtsanwalt und Stellung; Vergütung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Rechtsanwälte sind unabhängige Berater und Vertreter in allen Rechtsangelegenheiten. (2) Rechtsanwälte haben Anspruch auf eine angemessene Vergütung. (3) Die Rechtsanwaltschaft organisiert sich in einer Rechtsanwaltskammer. Die Kammer wählt einen Vorsitzenden aus ihrer Mitte und berät über Grundsatzfragen der Rechtsanwaltschaft. Die Kammer gibt sich eine eigene Satzung. (4) Bei personellen Engpässen wird keine Rechtsanwaltskammer gebildet. Ob ein personeller Engpass vorliegt, entscheidet die Leitung des DOJ nach pflichtgemäßem Ermessen."
      },
      {
        "number": "§ 36",
        "title": "Verschwiegenheitspflicht",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "Der Rechtsanwalt hat über die ihm im Rahmen seiner Tätigkeit der Vertretung eines Mandanten erlangten Informationen Verschwiegenheit zu bewahren."
      },
      {
        "number": "§ 37",
        "title": "Pflichtverteidiger; Vergütung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Wird dem Beschuldigten ein Pflichtverteidiger beigeordnet, so hat dieser Anspruch auf eine angemessene Vergütung. (2) Die Vergütung richtet sich nach der Besoldung für staatliche Pflichtverteidiger der Justiz."
      },
      {
        "number": "§ 38",
        "title": "Zulassungsvoraussetzungen",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "Die Zulassung zum Rechtsanwalt setzt eine erfolgreich bestandene Zulassungsprüfung voraus."
      },
      {
        "number": "§ 39",
        "title": "Antrag auf Zulassung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Der Antrag auf Zulassung zum Rechtsanwalt ist bei der Justiz einzureichen. (2) Dem Antrag sind die erforderlichen Unterlagen beizufügen."
      },
      {
        "number": "§ 40",
        "title": "Zulassungsstelle",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Das DOJ ist für die Entscheidung über die Zulassung zuständig, mithin die Zulassungsstelle. (2) Die Zulassungsstelle kann im Einzelfall weitere Unterlagen oder Nachweise anfordern. (3) Die Zulassungsstelle kann ergänzende Anforderungen stellen."
      },
      {
        "number": "§ 41",
        "title": "Zulassungsverfahren",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "Die Zulassung zum Rechtsanwalt erfolgt durch das DOJ nach erfolgreich abgeschlossenem Zulassungsverfahren."
      },
      {
        "number": "§ 42",
        "title": "Medizinisches Gutachten",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Die Zulassungsstelle kann von Bewerbern ein medizinisches Gutachten verlangen, wenn Zweifel an der gesundheitlichen Eignung im psychischen Sinne bestehen. (2) Das Gutachten wird ausschließlich von einer qualifizierten Person im Medical Department ausgestellt."
      },
      {
        "number": "§ 43",
        "title": "Aussetzung des Zulassungsverfahrens",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "Das Zulassungsverfahren kann ausgesetzt werden, wenn der Bewerber vorübergehend an der Teilnahme verhindert ist oder Zweifel an der Eignung bestehen."
      },
      {
        "number": "§ 44",
        "title": "Ablehnung des Antrags auf Zulassung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "Die Zulassungsstelle kann den Antrag auf Zulassung ablehnen, wenn die Zulassungsvoraussetzungen nicht erfüllt sind oder andere Gründe vorliegen, die eine Zulassung unzumutbar machen."
      },
      {
        "number": "§ 45",
        "title": "Zulassung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Wird der Antrag auf Zulassung zum Rechtsanwalt genehmigt, wird der Antragsteller im Rechtsanwaltsregister aufgenommen. (2) Mit der Zulassung ist der Bewerber zur Berufsbezeichnung “Rechtsanwalt” berechtigt."
      },
      {
        "number": "§ 46",
        "title": "Entzug der Zulassung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Die Zulassung zum Rechtsanwalt kann entzogen werden, wenn der Rechtsanwalt: gegen Berufspflichten verstoßen hat, strafgerichtlich verurteilt wurde oder seinen Berufspflichten nicht nachkommt. (2) Die Zulassung kann nur aufgrund einer mit Zwei-Drittel-Mehrheit entschiedenen Beschlusses der Rechtsanwaltskammer oder durch den Chief Justice oder den Deputy Chief Justice entzogen werden."
      },
      {
        "number": "§ 47",
        "title": "Vereidigung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Vor Beginn der Tätigkeit als Rechtsanwalt ist eine Vereidigung vor dem Gericht erforderlich. (2) Der Rechtsanwalt verpflichtet sich dabei zur gewissenhaften und unabhängigen Beratung und Vertretung seiner Mandanten sowie zur Wahrung der Verschwiegenheitspflicht und Recht und Gesetz."
      },
      {
        "number": "§ 48",
        "title": "Mandant",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Der Rechtsanwalt ist seinem Mandanten zur umfassenden und unabhängigen Beratung und Vertretung verpflichtet. (2) Der Mandant hat das Recht, seinen Rechtsanwalt frei zu wählen und zu wechseln."
      },
      {
        "number": "§ 49",
        "title": "Mandatsvertrag",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Zwischen dem Rechtsanwalt und seinem Mandanten kommt ein Mandatsvertrag zustande. Ohne diesen ist, außer im Rahmen der Pflichtverteidigung, keine rechtliche Vertretung einer Person durch den Rechtsanwalt möglich. (2) Der Mandatsvertrag regelt insbesondere den Umfang der Beauftragung sowie die Vergütung des Rechtsanwalts."
      },
      {
        "number": "§ 50",
        "title": "Kanzlei",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Rechtsanwälte können ihre Tätigkeit in einer Kanzlei ausüben. (2) Die Kanzlei muss dabei den Vorschriften des geltenden Rechts entsprechen und beim DOJ angemeldet werden. Eine nicht angemeldete Kanzlei kann geschlossen werden und der betreibende Rechtsanwalt bzw. die betreibenden Rechtsanwälte müssen eine Strafzahlung an das DOJ leisten."
      },
      {
        "number": "§ 51",
        "title": "Recht zur Beratung und Vertretung",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Der Rechtsanwalt ist berechtigt, seine Mandanten in allen rechtlichen Angelegenheiten zu beraten und zu vertreten. (2) Hierbei ist er an die Vorschriften des geltenden Rechts gebunden."
      },
      {
        "number": "§ 52",
        "title": "Recht auf Akteneinsicht",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Der Rechtsanwalt hat das Recht auf Akteneinsicht in den bei Gericht oder Behörden vorliegenden Akten. (2) Die Akteneinsicht kann jedoch eingeschränkt werden, wenn schutzwürdige Interessen Dritter oder anderer Geheimhaltungsinteressen entgegenstehen. Dies ist im Zweifel durch die Richterschaft oder den Chief Justice oder den Deputy Chief Justice auf Antrag festzustellen."
      },
      {
        "number": "§ 53",
        "title": "Tätigkeitsverbot",
        "chapter": {
          "number": "IV.",
          "title": "Rechtsanwaltschaft"
        },
        "text": "(1) Rechtsanwälte dürfen sich nicht an Tätigkeiten beteiligen, die gegen das geltende Recht verstoßen. (2) Insbesondere ist es ihnen untersagt, Tätigkeiten auszuüben, die im Widerspruch zu ihren Pflichten als unabhängige Berater und Vertreter stehen."
      }
    ]
  },
  {
    "id": "penal",
    "title": "Penal Code",
    "category": "Strafrecht",
    "sourceFile": "S.A. STATE GOVERNMENT - Penal Code.html",
    "sections": [
      {
        "number": "§ 1",
        "title": "Keine Strafe ohne Gesetz",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Eine Tat kann nur bestraft werden, wenn ihre Strafbarkeit gesetzlich bestimmt war, bevor die Tat begangen wurde."
      },
      {
        "number": "§ 2",
        "title": "Zeitliche Geltung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Maßgeblich ist das Gesetz, das zur Zeit der Tat galt. (2) Wird das Gesetz vor der Entscheidung geändert, ist das mildeste des Strafkatalogs anzuwenden. (3) Zeitlich befristete Gesetze gelten für Taten, die während ihrer Geltungsdauer begangen wurden, auch nach Außerkrafttreten fort."
      },
      {
        "number": "§ 3",
        "title": "Räumliche Geltung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Das Strafrecht des Staates San Andreas gilt für alle Taten, die auf seinem Staatsgebiet begangen oder von hier aus verübt werden."
      },
      {
        "number": "§ 4",
        "title": "Vorsatz und Fahrlässigkeit",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Strafbar ist grundsätzlich nur vorsätzliches Handeln. (2) Fahrlässigkeit ist nur strafbar, wenn das Gesetz sie ausdrücklich unter Strafe stellt."
      },
      {
        "number": "§ 5",
        "title": "Verbrechen und Vergehen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Verbrechen sind Straftaten mit erheblicher Strafandrohung. (2) Vergehen sind Straftaten mit geringerer Strafandrohung."
      },
      {
        "number": "§ 6",
        "title": "Strafzumessung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Bei der Strafzumessung sind Tat, Schuld, Vorleben und Umstände zu berücksichtigen, sowie das Verhalten nach der Tat."
      },
      {
        "number": "§ 7",
        "title": "Irrtum",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer bei Begehung der Tat einen Umstand nicht kennt, der zum Tatbestand gehört, handelt nicht vorsätzlich. (2) Wer irrtümlich mildernde Umstände annimmt, wird nach dem milderen Gesetz bestraft."
      },
      {
        "number": "§ 8",
        "title": "Verbotsirrtum",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer bei Begehung der Tat irrtümlich glaubt, rechtmäßig zu handeln, ist nur dann entschuldigt, wenn der Irrtum unvermeidbar war."
      },
      {
        "number": "§ 9",
        "title": "Schuldunfähigkeit",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Ohne Schuld handelt, wer infolge einer psychischen Erkrankung, tiefgreifenden Bewusstseinsstörung oder geistigen Behinderung unfähig ist, das Unrecht der Tat einzusehen oder nach dieser Einsicht zu handeln. Die Feststellung erfolgt durch ein medizinisches Gutachten; die endgültige Entscheidung trifft ein Gericht."
      },
      {
        "number": "§ 10",
        "title": "Verminderte Schuldfähigkeit",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Ist die Einsichts- oder Steuerungsfähigkeit bei Begehung der Tat erheblich vermindert, kann die Strafe gemildert werden."
      },
      {
        "number": "§ 11",
        "title": "Versuch",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Versuch eines Verbrechens ist strafbar. Der Versuch eines Vergehens ist strafbar, wenn das Gesetz es bestimmt. (2) Wer freiwillig von der Tat zurücktritt, kann strafmildernd behandelt werden. Der Rücktritt muss freiwillig und ernsthaft erfolgen. (3) Das Gericht kann die Strafe mildern."
      },
      {
        "number": "§ 12",
        "title": "Notwehr",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer eine Tat begeht, die durch Notwehr geboten ist, handelt nicht rechtswidrig, sofern die Verteidigung erforderlich, verhältnismäßig und nicht offensichtlich überzogen ist. (2) Notwehr ist die erforderliche Verteidigung gegen einen gegenwärtigen, rechtswidrigen Angriff auf sich oder einen anderen."
      },
      {
        "number": "§ 13",
        "title": "Rechtfertigender Notstand",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Freiheit, Eigentum oder ein anderes Rechtsgut eine Tat begeht, um die Gefahr von sich oder einem anderen abzuwenden, handelt nicht rechtswidrig, wenn das geschützte Interesse das beeinträchtigte wesentlich überwiegt und kein milderes Mittel zur Verfügung steht."
      },
      {
        "number": "§ 14",
        "title": "Beteiligung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Als Täter gilt, wer die Tat selbst begeht oder durch einen anderen ausführen lässt. (2) Als Anstifter wird bestraft, wer vorsätzlich einen anderen zur Tat bestimmt. (3) Als Gehilfe wird bestraft, wer eine Tat vorsätzlich fördert oder dieser wissentlich beiwohnt."
      },
      {
        "number": "§ 15",
        "title": "Lebenslange Freiheitsstrafe",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Eine lebenslange Freiheitsstrafe beträgt 120 Hafteinheiten."
      },
      {
        "number": "§ 16",
        "title": "Verjährung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Die Verjährung schließt die Strafverfolgung und Maßnahmeanordnung aus. (2) Mord (§ 17) verjährt nicht. (3) Die allgemeine Verjährungsfrist für Vergehen beträgt drei Monate; Für Verbrechen 6 Monate. (4) Wird innerhalb der Frist ein Verfahren anhängig, ruht die Verjährung bis zur Entscheidung. II. Straftaten gegen das Leben und die körperliche Unversehrtheit"
      },
      {
        "number": "§ 17",
        "title": "Mord",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer aus niedrigen Beweggründen, heimtückisch, grausam oder mit gemeingefährlichen Mitteln einen Menschen tötet, wird wegen Mordes bestraft."
      },
      {
        "number": "§ 18",
        "title": "Totschlag",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer vorsätzlich einen Menschen tötet, ohne Mörder zu sein, wird wegen Totschlags bestraft."
      },
      {
        "number": "§ 19",
        "title": "Fahrlässige Tötung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer durch Fahrlässigkeit den Tod eines Menschen verursacht, macht sich strafbar."
      },
      {
        "number": "§ 20",
        "title": "Körperverletzung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer eine andere Person körperlich misshandelt oder an der Gesundheit schädigt, macht sich strafbar."
      },
      {
        "number": "§ 21",
        "title": "Gefährliche Körperverletzung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Eine Körperverletzung ist gefährlich, wenn sie: a) mit Waffen oder gefährlichen Werkzeugen, b) gemeinschaftlich oder c) unter lebensgefährdender Behandlung begangen wird."
      },
      {
        "number": "§ 22",
        "title": "Fahrlässige Körperverletzung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer fahrlässig die Gesundheit eines anderen schädigt, macht sich strafbar. III. Straftaten gegen die persönliche Freiheit"
      },
      {
        "number": "§ 23",
        "title": "F",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "reiheitsberaubung Wer einen Menschen einsperrt oder ihm sonst die Freiheit entzieht, wird bestraft."
      },
      {
        "number": "§ 24",
        "title": "Geiselnahme",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer einen Menschen entführt oder sich seiner bemächtigt, um ihn oder einen Dritten durch Drohung mit Gewalt oder Freiheitsentzug zu nötigen, macht sich strafbar."
      },
      {
        "number": "§ 25",
        "title": "Hausfriedensbruch",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer in die Wohnung, Geschäftsräume oder das befriedete Besitztum eines anderen widerrechtlich eindringt oder trotz Aufforderung nicht verlässt, macht sich strafbar."
      },
      {
        "number": "§ 26",
        "title": "Üble Nachrede und Verleumdung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer die Ehre einer anderen Person vorsätzlich verletzt, macht sich strafbar. (2) Wer über einen anderen Tatsachen behauptet oder verbreitet, die geeignet sind, ihn herabzuwürdigen, wird bestraft, wenn sie nicht erweislich wahr sind. (3) Wer wider besseres Wissen eine unwahre Tatsache behauptet, begeht Verleumdung, sofern die Äußerung nicht durch die Meinungsfreiheit gedeckt ist."
      },
      {
        "number": "§ 27",
        "title": "Bedrohung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer einen Menschen mit der Begehung eines gegen ihn oder eine ihm nahestehenden Person gerichteten Verbrechens bedroht, macht sich strafbar. (2) Ebenso wird bestraft, wer wider besseres Wissen einem Menschen die bevorstehende Begehung eines gegen ihn oder eine ihm nahestehende Person gerichteten Verbrechens vortäuscht."
      },
      {
        "number": "§ 28",
        "title": "Nötigung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer einen Menschen rechtswidrig mit Gewalt oder Drohung zu einer Handlung, Duldung oder Unterlassung zwingt, macht sich strafbar."
      },
      {
        "number": "§ 29",
        "title": "Erpressung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer durch Drohung oder Gewalt eine Handlung erzwingt und sich oder einem Dritten einen rechtswidrigen Vermögensvorteil verschafft, begeht Erpressung."
      },
      {
        "number": "§ 30",
        "title": "Nachstellung (Stalking)",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer einer Person beharrlich nachstellt, ihre Privatsphäre verletzt oder sie bedroht, sodass deren Lebensgestaltung erheblich beeinträchtigt wird, macht sich strafbar."
      },
      {
        "number": "§ 31",
        "title": "Sexuelle Belästigung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer eine Person in sexuell bestimmter Weise körperlich berührt und dadurch belästigt, wird bestraft."
      },
      {
        "number": "§ 32",
        "title": "Zwangsheirat",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer einen Menschen mit Gewalt oder Drohung zur Eingehung einer Ehe nötigt, macht sich strafbar. I V . Straftaten gegen das Vermögen"
      },
      {
        "number": "§ 33",
        "title": "Diebstahl",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer einem anderen eine bewegliche Sache wegnimmt, um sie sich oder einem Dritten rechtswidrig zuzueignen, macht sich strafbar."
      },
      {
        "number": "§ 34",
        "title": "Raub",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer eine fremde Sache unter Anwendung von Gewalt oder Drohung wegnimmt, begeht Raub."
      },
      {
        "number": "§ 35",
        "title": "Schwerer Raub",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer einen Raub gegen staatliche Einrichtungen oder unter Verwendung von Schuss-, Stich- oder Hiebwaffen begeht, wird wegen schweren Raubes bestraft."
      },
      {
        "number": "§ 36",
        "title": "Betrug",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer durch Täuschung über Tatsachen einen Irrtum erregt und sich oder einem Dritten einen Vermögensvorteil verschafft, macht sich strafbar."
      },
      {
        "number": "§ 37",
        "title": "Erschleichen von Leistungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer sich oder einem Dritten im Rahmen eines Vertrages eine Leistung verschafft, ohne die geschuldete Gegenleistung zu erbringen, handelt rechtswidrig, wenn dies a. Durch Täuschung beim Vertragsschluss oder b. Durch pflichtwidriges Unterlassen der Gegenleistung nach Vertragsschluss geschieht. (2) Eine Tat liegt nach (1a) insbesondere vor, wenn der Täter: a. falsche Angaben über Identität, Zahlungsfähigkeit oder Absichten macht, b. wesentliche Umstände verschweigt, die für den Vertrag erheblich sind, c. den Vertrag unter Vorspiegelung einer Zahlungsbereitschaft abschließt. (3) Eine Tat liegt nach (1b) insbesondere vor, wenn der Täter: a. eine fällige Zahlung trotz Möglichkeit und Verpflichtung nicht leistet, b. sich nach Erhalt der Leistung der Zahlung entzieht oder diese verweigert, c. die Leistung entgegennimmt und anschließend ohne rechtfertigenden Grund nicht erfüllt. (4) Ein Erschleichen von Leistungen setzt voraus, dass der geschädigten Partei ein wirtschaftlicher Nachteil entsteht oder zu entstehen droht. (5) Ein besonders schwerer Fall liegt vor, wenn: a. gewerbsmäßig gehandelt wird, b. ein hoher Vermögensschaden verursacht wird, c. mehrere Personen beteiligt sind, d. wiederholt gleichartige Taten begangen werden. (6) Liegt ein Erschleichen von Leistungen vor, so können die Gerichte den Täter zur unmittelbaren Zahlung der in Anspruch genommenen Leistungen verpflichten. Sollte eine Leistung durch den Täter nicht erbracht worden sein, so ist dieser zur unmittelbaren Rückzahlung des erhaltenen Betrags verpflichtet. Dies beinhaltet, sofern der Täter nicht zahlungsfähig ist, auch die Enteignung von beweglichen oder unbeweglichen Gegenständen, soweit dies zur Durchsetzung erforderlich ist."
      },
      {
        "number": "§ 38",
        "title": "Sachbeschädigung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer rechtswidrig eine fremde Sache beschädigt, zerstört oder erheblich verändert, macht sich strafbar."
      },
      {
        "number": "§ 39",
        "title": "Unterschlagung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer eine fremde Sache, die ihm anvertraut wurde, sich oder einem Dritten rechtswidrig zueignet, begeht Unterschlagung."
      },
      {
        "number": "§ 40",
        "title": "Hehlerei",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer eine durch Diebstahl oder Betrug erlangte Sache ankauft, weiterveräußert oder absetzt, wird bestraft."
      },
      {
        "number": "§ 41",
        "title": "Urkunden- und Dokumentenfälschung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer zur Täuschung im Rechtsverkehr Urkunden, Ausweise oder amtliche Dokumente fälscht oder gefälschte benutzt, begeht eine Straftat."
      },
      {
        "number": "§ 42",
        "title": "Geldfälschung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer Falschgeld herstellt, in Verkehr bringt oder Geldmittel besitzt, von denen er weiß, dass sie aus einer Straftat stammen, macht sich strafbar. (2) Gleiches gilt für den bewussten Handel oder die Weitergabe. V. Straftaten gegen die öffentliche Ordnung und den Staat"
      },
      {
        "number": "§ 43",
        "title": "Widerstand gegen Vollstreckungsbeamte",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer einer vollziehenden Amtsperson mit Gewalt oder Drohung Widerstand leistet, wird bestraft."
      },
      {
        "number": "§ 44",
        "title": "Behinderung staatlicher Maßnahmen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer vorsätzlich die Tätigkeit einer staatlichen Behörde oder eines Beamten behindert, macht sich strafbar."
      },
      {
        "number": "§ 45",
        "title": "Strafvereitelung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer absichtlich vereitelt, dass ein anderer wegen einer rechtswidrigen Tat bestraft wird, macht sich strafbar."
      },
      {
        "number": "§ 46",
        "title": "Amtsanmaßung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer unbefugt Handlungen vornimmt, die nur kraft öffentlichen Amtes erlaubt sind, begeht Amtsanmaßung."
      },
      {
        "number": "§ 47",
        "title": "Korruption und Amtsmissbrauch",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer als Amtsträger sein Amt missbraucht, um Vorteile zu gewähren oder zu erlangen, macht sich strafbar. (2) Der Versuch ist strafbar."
      },
      {
        "number": "§ 48",
        "title": "Missbrauch von Notrufen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer Notrufe oder Notzeichen missbraucht oder eine Notlage vortäuscht, macht sich strafbar."
      },
      {
        "number": "§ 49",
        "title": "Flucht vor Maßnahmen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer wissentlich vor einer rechtmäßigen und als solche erkennbaren exekutiven Maßnahme flieht, macht sich strafbar."
      },
      {
        "number": "§ 50",
        "title": "G",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "eheimnisverrat (1) Wer vertrauliche oder amtliche Informationen unbefugt weitergibt, begeht Geheimnisverrat. (2) Als Amtsträger trifft ihn eine erhöhte Schuld."
      },
      {
        "number": "§ 51",
        "title": "Hochverrat",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer mit Gewalt oder durch organisierte Handlungen die verfassungsmäßige Ordnung des Staates San Andreas zu beseitigen versucht, begeht Hochverrat."
      },
      {
        "number": "§ 52",
        "title": "Volksverhetzung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer öffentlich zum Hass gegen Bevölkerungsgruppen aufstachelt oder deren Würde angreift, wird bestraft, sofern dadurch unmittelbar zu Gewalt oder Straftaten aufgerufen wird."
      },
      {
        "number": "§ 53",
        "title": "Unterlassene Hilfeleistung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer bei Unglücksfällen oder Gefahr keine zumutbare Hilfe leistet, macht sich strafbar, soweit dies zumutbar und ohne erhebliche Eigengefährdung möglich ist."
      },
      {
        "number": "§ 54",
        "title": "Erregung öffentlichen Ärgernisses",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer öffentlich sexuelle Handlungen vornimmt oder grob ungehörige Handlungen begeht, die geeignet sind, die öffentliche Ordnung erheblich zu stören, wird bestraft."
      },
      {
        "number": "§ 55",
        "title": "Lärmbelästigung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer ohne berechtigten Anlass vermeidbaren Lärm verursacht, der andere erheblich beeinträchtigt, begeht eine Ordnungswidrigkeit."
      },
      {
        "number": "§ 56",
        "title": "Nicht genehmigte Versammlung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer eine nicht genehmigte Versammlung organisiert oder daran teilnimmt, um Straftaten zu begehen oder die öffentliche Sicherheit erheblich zu gefährden, wird bestraft."
      },
      {
        "number": "§ 57",
        "title": "Betreten von Sperrzonen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer wissentlich eine von der Exekutive eingerichtete Sperrzone betritt oder diese trotz Aufforderung nicht verlässt, begeht eine Straftat."
      },
      {
        "number": "§ 58",
        "title": "Staatliche Einrichtungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer unbefugt in staatliche Einrichtungen eindringt oder aus diesen ausbricht, wird bestraft."
      },
      {
        "number": "§ 59",
        "title": "Verstoß gegen Auflagen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer Auflagen der Staatsanwaltschaft oder richterliche Weisungen nicht befolgt, wird nach Bußgeldkatalog oder richterlichem Ermessen bestraft."
      },
      {
        "number": "§ 60",
        "title": "Vermummung und Maskierung im öffentlichen Raum",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Das Tragen von Maskierungen, Bandanas, Helmen oder sonstiger Gesichtsbedeckung, die das Erkennen einer Person ganz oder teilweise verhindert, ist verboten, sofern dies zur Begehung oder Verschleierung einer Straftat erfolgt oder eine rechtmäßige Identitätsfeststellung gezielt verhindert wird. (2) Dies gilt auch in Kraftfahrzeugen, sofern sie sich auf öffentlichem Grund befinden. (3) Verstöße gelten als Ordnungswidrigkeit."
      },
      {
        "number": "§ 61",
        "title": "Staatliche Abzeichen, Logos & Symbole",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Die Verwendung von staatlichen Abzeichen, Logos oder Symbolen zur Täuschung im Rechtsverkehr ist verboten. (2) Auch die Verwendung von Abzeichen, Logos oder Symbolen, bei denen eine Gefahr besteht, diese mit den staatlichen Abzeichen, Logos oder Symbolen zu verwechseln ist verboten, sofern dadurch eine Täuschung im Rechtsverkehr erfolgen kann."
      },
      {
        "number": "§ 62",
        "title": "Zahlungspflicht und Sanktionen bei staatlichen Rechnungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Rechnungen und sonstige Zahlungsaufforderungen staatlicher Stellen sind innerhalb von zehn Tagen nach Zugang vollständig zu begleichen, sofern nicht ausdrücklich schriftlich eine längere Zahlungsfrist bekannt gegeben wurde. (2) Nach Ablauf der Zahlungsfrist tritt Zahlungsverzug ohne weitere Mahnung ein. (3) Bei nicht fristgerechter Zahlung kann das Department of Justice die festgesetzte Geldforderung je nach Höhe bis zu verdoppeln. (4) Bei fortdauernder oder schwerwiegender Nichtzahlung können durch gerichtliche Anordnung Zwangsmaßnahmen bis hin zur Enteignung von beweglichen oder unbeweglichen Gegenständen angeordnet werden, soweit dies zur Durchsetzung der Forderung erforderlich ist. (5) Personen, die staatliche Rechnungen in Höhe über 200.000 $ haben, und diese nach der Frist von Absatz 1 nicht bezahlt wurden, können mit 40 Hafteinheiten bestraft werden, sofern vorsätzliches und nachhaltiges Nichtzahlen trotz Leistungsfähigkeit vorliegt. Diese werden in Form einer Fahndung vollstreckt. Die Geldstrafe entfällt dabei nicht."
      },
      {
        "number": "§ 63",
        "title": "Falsche Verdächtigung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Wer eine andere Person wissentlich zu Unrecht bei Exekutivbehörden einer Straftat beschuldigt oder falsche Beweise bzw. Aussagen macht, um ein Verfahren gegen sie auszulösen, wird bestraft."
      }
    ]
  },
  {
    "id": "narcotics",
    "title": "Narcotics Act",
    "category": "Betäubungsmittelrecht",
    "sourceFile": "S.A. STATE GOVERNMENT - Narcotics Act.html",
    "sections": [
      {
        "number": "§ 1",
        "title": "Begriffsbestimmungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Betäubungsmittel im Sinne dieses Gesetzes sind die in den Anlagen I und II aufgeführten Stoffe, Zubereitungen und chemischen Derivate, die aufgrund ihrer Wirkung unter staatlicher Kontrolle stehen. (2) Als Betäubungsmittel gelten insbesondere Stoffe, die: ein Abhängigkeitspotential aufweisen, das zentrale Nervensystem beeinflussen, oder missbräuchlich zu Rauschzwecken verwendet werden können. (3) Die jeweiligen Stoffe und Zubereitungen werden durch Gesetz oder durch zuständige Gesundheitsbehörden festgelegt . (4) Besitz im Sinne dieses Gesetzes ist die tatsächliche Verfügungsgewalt über Betäubungsmittel. (5) Herstellung bezeichnet das Gewinnen, Zubereiten, Umwandeln oder Verarbeiten von Betäubungsmitteln. (6) Inverkehrbringen ist das gewerbliche oder private Anbieten, Veräußern, Abgeben oder Handeln mit Betäubungsmitteln."
      },
      {
        "number": "§ 2",
        "title": "Verkehr mit Betäubungsmitteln",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Besitz geringer Mengen von Betäubungsmitteln zum Eigengebrauch kann gesetzlich straffrei gestellt werden. (2) Im Übrigen bedarf der Umgang mit Betäubungsmitteln, insbesondere Herstellung, Einfuhr, Ausfuhr, Abgabe oder Handel, einer ausdrücklichen Erlaubnis des Los Santos Medical Department (LSMD), sofern keine gesetzliche Ausnahme vorliegt. (3) Das Department of Justice kann im Rahmen strafrechtlicher Verfahren Auflagen anordnen."
      },
      {
        "number": "§ 3",
        "title": "Handel mit Betäubungsmittel",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Handel mit Betäubungsmitteln ist ausschließlich autorisiertem medizinischen Fachpersonal oder lizenzierten Einrichtungen gestattet. (2) Die zuständigen Gesundheits- oder Lizenzbehörden können im Einzelfall eine zeitlich befristete Ausnahmegenehmigung erteilen. Diese darf maximal einen Monat gelten und muss schriftlich bestätigt werden. (3) Jedes sonstige Handeln mit Betäubungsmitteln ohne eine solche ausdrückliche Genehmigung ist verboten und strafbar."
      },
      {
        "number": "§ 4",
        "title": "Herstellung von Betäubungsmittel",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Die Herstellung von Betäubungsmitteln ist ausschließlich zertifizierten und behördlich zugelassenen Einrichtungen gestattet und unterliegt regelmäßigen Kontrollen. (2) Der Besitz und die Verwendung von Rohstoffen, die zur Herstellung von Betäubungsmitteln im Sinne dieses Gesetzes dienen, sind nur den zertifizierten Behörden und deren ausdrücklich autorisierten Personen erlaubt. (3) Unbefugte Herstellung, Verarbeitung oder der Versuch der Herstellung von Betäubungsmitteln außerhalb der in diesem Gesetz ausdrücklich zugelassenen Einrichtungen ist verboten und strafbar. (4) Die Überwachung und Kontrolle der zugelassenen Produktionsstätten obliegt dem Los Santos Medical Department (LSMD). Das Department of Justice wird im Rahmen strafrechtlicher Ermittlungen tätig."
      },
      {
        "number": "§ 5",
        "title": "Ausnahmen der Erlaubnispflicht",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Alkohol und Tabakprodukte unterliegen nicht den Vorschriften dieses Gesetzes. Ihr Besitz, Erwerb und Konsum sind für jedermann gestattet, soweit keine anderweitigen gesetzlichen Bestimmungen entgegenstehen. (2) Cannabisprodukte dürfen ausschließlich zum Eigengebrauch konsumiert werden. Der Besitz von bis zu zwei (2) Konsumeinheiten ist erlaubt und bleibt straffrei, sofern kein gewerblicher oder öffentlicher Handel erfolgt. (3) Jeglicher Handel oder Vertrieb von Cannabisprodukten außerhalb einer gesetzlichen oder behördlichen Genehmigung ist verboten und strafbar. I I. Erlaubnis zum Verkehr mit Betäubungsmitteln"
      },
      {
        "number": "§ 6",
        "title": "Betäubungsmittel-Schein",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Betäubungsmittel-Schein wird ausschließlich durch das Los Santos Medical Department (LSMD) ausgestellt. (2) Ein gültiger Betäubungsmittel-Schein berechtigt zum Besitz von bis zu fünf (5) Konsumeinheiten abweichend von §5 Abs.2. (3) Das Herstellen von Cannabisprodukten zum privaten und nicht gewerblichen Gebrauch ist Inhabern eines gültigen Betäubungsmittel-Scheins gestattet. (4) Der Betäubungsmittel-Schein ist bei jedem Besitz, Konsum oder der Herstellung von Cannabisprodukten mitzuführen und auf Verlangen den zuständigen Behörden vorzuzeigen."
      },
      {
        "number": "§ 7",
        "title": "Hanfpflanzen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Besitz und Anbau von Hanfpflanzen zur Herstellung von Cannabisprodukten auf privaten, nicht gewerblichen Grundstücken ist nur mit einem gültigen Betäubungsmittel-Schein zulässig. (2) Die Zahl der auf einem Grundstück angebauten Hanfpflanzen darf fünf (5) nicht überschreiten. (3) Es dürfen insgesamt bis zu fünf (5) Hanfpflanzen gleichzeitig besessen oder kultiviert werden. (4) Zuwiderhandlungen gegen die Bestimmungen der Absätze 1 bis 3 sind strafbar. Ein unzulässiger Besitz oder Anbau von Hanfpflanzen wird nach dem Strafkatalog des Staates San Andreas geahndet. (5) Die Kontrolle und Überwachung des Anbaus obliegt dem Los Santos Medical Department (LSMD) in Zusammenarbeit mit dem Department of Justice."
      },
      {
        "number": "§ 8",
        "title": "Lagerung und Transport von Betäubungsmitteln",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Betäubungsmittel dürfen nur in gesicherten Einrichtungen gelagert werden, die den behördlichen Sicherheitsstandards entsprechen und insbesondere gegen unbefugten Zugriff gesichert sind. (2) Der Transport darf ausschließlich durch autorisierte Personen unter Aufsicht des Los Santos Medical Department (LSMD) erfolgen."
      },
      {
        "number": "§ 9",
        "title": "Medizinische und wissenschaftliche Verwendung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Einsatz von Betäubungsmitteln zu Forschungs-, Schulungs- oder medizinischen Zwecken bedarf einer schriftlichen Genehmigung ausschließlich durch medizinische Behörden. (2) Genehmigungen sind befristet und können jederzeit widerrufen werden."
      },
      {
        "number": "§ 10",
        "title": "Zuständige Behörden",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Für die Kontrolle und Genehmigung von Betäubungsmitteln ist das Los Santos Medical Department (LSMD) zuständig. (2) Die strafrechtliche Verfolgung obliegt dem Department of Justice. (3) Exekutive Behörden leisten Amtshilfe bei Kontrolle und Durchsetzung."
      },
      {
        "number": "§ 11",
        "title": "Nicht in den Anlagen aufgeführte Betäubungsmittel",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Stoffe, die nicht ausdrücklich in dieser Anlage genannt sind, unterliegen den Bestimmungen des BtMG, sofern sie in Wirkung, Struktur oder Zusammensetzung den hier aufgeführten Betäubungsmitteln entsprechen."
      }
    ]
  },
  {
    "id": "armament",
    "title": "Armament Code",
    "category": "Waffenrecht",
    "sourceFile": "S.A. STATE GOVERNMENT - Armament Code.html",
    "sections": [
      {
        "number": "§ 1",
        "title": "Begriffsbestimmungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Waffen sind Schusswaffen sowie tragbare Gegenstände, die ihrem Wesen nach dazu bestimmt sind, die Angriffs- oder Abwehrfähigkeit von Menschen zu beseitigen oder herabzusetzen. (2) Führen ist das Mitnehmen einer Waffe außerhalb der eigenen Wohn- oder Geschäftsräume oder eines befriedeten Besitztums. (3) Benutzen umfasst insbesondere das Abfeuern, den Einsatz gegen Personen oder Sachen sowie das Bereithalten in einer Weise, die geeignet ist, andere zu gefährden oder einzuschüchtern. (4) Öffentlichkeit ist jeder allgemein zugängliche Ort sowie der öffentliche Straßenverkehr. (5) Unbrauchbar gemachte Dekorationswaffen gelten nicht als Waffen, wenn sie dauerhaft und nachweisbar funktionsunfähig sind. II. Waffen und Zubehör"
      },
      {
        "number": "§ 2",
        "title": "Gegenstände",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Verboten sind: a) vollautomatische Schusswaffen, b) explosive Waffen und Sprengmittel, c) Raketenwerfer und vergleichbare militärische Waffen, d) Schusswaffen, die weder ordnungsgemäß registriert noch eindeutig identifizierbar sind, sowie solche, die nicht über den legalen Erwerbsweg bei Ammu-Nation bezogen werden können, e) Magazine mit einer Kapazität von über 15 Schuss, f) Schalldämpfer. (2) Halbautomatische Langwaffen mit militärischer Bauweise unterliegen besonderen Beschränkungen. (3) Der Besitz sonstiger Waffen ist nur im Rahmen der gesetzlichen Bestimmungen zulässig. (4) Erwerb, Besitz, Führen, Überlassen und Benutzen der in Absatz 1 genannten Gegenstände sind verboten. III. Erwerb, Besitz, Aufbewahrung, Transport"
      },
      {
        "number": "§ 3",
        "title": "Grundsätze",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Zivile Personen dürfen Schusswaffen besitzen, sofern sie über eine gültige Genehmigung verfügen. (2) Waffen sind so aufzubewahren, dass kein unbefugter Zugriff möglich ist. (3) Der Transport von Waffen ist nur ungeladen und gesichert zulässig. (4) Das offene Führen von Schusswaffen in der Öffentlichkeit ist zivilen Personen untersagt. (5) Das Bereithalten oder Zeigen von Waffen in der Öffentlichkeit ist untersagt, sofern kein rechtfertigender Grund vorliegt oder eine entsprechende Genehmigung besteht."
      },
      {
        "number": "§ 4",
        "title": "Waffenschein",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Waffenschein wird ausschließlich durch den zuständigen Ammu-Nation erteilt. (2) Die Erlaubnis berechtigt zum Besitz registrierter Kurzwaffen. (3) Die Erlaubnis ist persönlich, nicht übertragbar und auf Verlangen vorzuzeigen. (4) Voraussetzungen sind: a) persönliche Zuverlässigkeit, b) keine schwerwiegenden Vorstrafen, c) erfolgreiche Überprüfung durch die zuständigen Behörden. d) Verpflichtung zur Registrierung gemäß §5. (5) Die Erlaubnis kann befristet, eingeschränkt oder widerrufen werden. (6) Das verdeckte Führen kann gesondert genehmigt werden. Ohne Genehmigung ist das Führen unzulässig."
      },
      {
        "number": "§ 5",
        "title": "Registrierung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Jede Person, die eine Schusswaffe erwirbt, ist verpflichtet, diese innerhalb von 48 Stunden beim Department of Justice registrieren und in das offizielle Waffenregister eintragen zu lassen. (2) Die Eintragung hat vollständig und wahrheitsgemäß zu erfolgen. Der Besitzer ist verpflichtet, alle erforderlichen Informationen zur Identifikation der Waffe und zur Feststellung der Berechtigung vorzulegen. (3) Wird die Eintragung nicht innerhalb der in Absatz 1 genannten Frist vorgenommen, kann das Department of Justice Maßnahmen ergreifen, einschließlich, aber nicht beschränkt auf: den Entzug der Waffenlizenz, ein vorübergehendes Waffenführverbot, die Beschlagnahmung der nicht registrierten Waffe. (4) Der Entzug der Waffenlizenz erfolgt insbesondere dann, wenn der Besitzer trotz Aufforderung die Registrierung weiterhin unterlässt oder wiederholt gegen die Eintragungspflicht verstößt. (5) Die in den Absätzen 1 bis 4 genannten Pflichten und Maßnahmen gelten nicht für Angehörige des executiven Vollzugs, sofern die Waffen dienstlich ausgegeben oder im Rahmen ihrer offiziellen Tätigkeit geführt werden. I V . Benutzung"
      },
      {
        "number": "§ 6",
        "title": "Zulässige Nutzung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Erlaubt sind Werkzeuge und Sportgeräte, soweit keine Schädigungsabsicht besteht. (2) Sportschießen ist nur auf dafür zugelassenen Schießständen zulässig. Sicherheitsregeln sind einzuhalten. (3) Der Einsatz von Schusswaffen ist nur zur Selbstverteidigung oder Nothilfe zulässig, sofern dies verhältnismäßig ist. (4) Alkohol- oder Drogeneinfluss schließt das Führen und Benutzen von Waffen aus."
      },
      {
        "number": "§ 7",
        "title": "Waffenfreie Zonen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "In und an Gerichten, Behörden, Universitäten, Krankenhäusern, Versammlungen und Demonstrationen sowie bei genehmigten Veranstaltungen ist das Führen von Waffen verboten. Ausnahmen gelten für Einsatzkräfte im Dienst. V. Dienstwaffen der Behörden"
      },
      {
        "number": "§ 8",
        "title": "Dienstwaffen und Befugnisse",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Exekutivbehörden führen dienstlich zugelassene Waffen gemäß internen Dienstvorschriften. (2) Auswahl, Ausgabe, Trageweise, Munitionsarten und Einsatzgrundsätze richten sich nach Dienstvorschriften. (3) Dienstliche Nutzung außerhalb des Dienstes ist unzulässig. Privatbesitz dienstlicher Waffen ist verboten. VI. Erwerb, Handel, Herstellung"
      },
      {
        "number": "§ 9",
        "title": "Erwerb und Handel",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Erwerb zulässiger ziviler Waffen erfolgt ausschließlich über lizenzierte Händler. (2) Handel, Weitergabe oder Überlassen verbotener Waffen ist verboten. (3) Händler benötigen eine behördliche Handelserlaubnis und sind verpflichtet, Verkäufe zu dokumentieren und zu melden."
      },
      {
        "number": "§ 10",
        "title": "Herstellung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Herstellung, Umbau oder Instandsetzung von Schusswaffen ist nur zertifizierten Behörden oder Unternehmen gestattet. (2) Besitz, Herstellung oder Handel von Waffenteilen zum Zweck des illegalen Zusammenbaus ist verboten. (3) Seriennummern dürfen nicht entfernt, verändert oder unkenntlich gemacht werden. VII. Kontrolle, Sicherstellung, Maßnahmen"
      },
      {
        "number": "§ 11",
        "title": "Kontrolle",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Exekutivbehörden sind zur Kontrolle von Waffenscheinen, Registrierungsnachweisen, Transport- und Aufbewahrungsbedingungen berechtigt. (2) Bei Gefahr im Verzug dürfen Waffen vorläufig sichergestellt werden. (3) Bei Verstoß können Waffenschein und Erlaubnisse widerrufen, Waffen eingezogen und vernichtet werden. VIII. Straf- und Bußgeldbestimmungen"
      },
      {
        "number": "§ 12",
        "title": "Sanktionen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Verstöße gegen Verbote des § 2 sind Straftaten. (2) Verstöße gegen Registrierung, Aufbewahrung, Transport, Vorzeigen und Auflagen sind Ordnungswidrigkeiten, soweit nicht schwerwiegender. (3) Strafrahmen richten sich nach dem Strafgesetzbuch. (4) Waffen und Zubehör, die zur Tat benutzt wurden oder aus ihr herrühren, können eingezogen werden."
      }
    ]
  },
  {
    "id": "border",
    "title": "Border Control Act",
    "category": "Grenzrecht",
    "sourceFile": "S.A. STATE GOVERNMENT - Border Control Act.html",
    "sections": [
      {
        "number": "§ 1",
        "title": "Begriffsbestimmungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Die Grenze im Sinne dieser Verordnung verläuft entlang der festgelegten staatlichen Grenzanlagen zwischen den Verwaltungsgebieten. (2) Als Grenzbereich gilt der beidseitige Abschnitt bis zu einer Entfernung von 150 Metern entlang der Grenzanlagen. (3) Der Zaun sowie alle daran angebrachten Kontrollpunkte, Tore und Schranken gelten als Bestandteil der staatlichen Grenzanlage."
      },
      {
        "number": "§ 2",
        "title": "Grenzübertritt",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Die Beamten der Exekutivbehörden sind berechtigt, Personen und Fahrzeuge, die die Grenze überqueren möchten, jederzeit zu kontrollieren und nach illegalen Gegenständen zu durchsuchen. Die Kontrolle umfasst die Prüfung von Personalien, Fahrzeugpapieren und Warenbegleitdokumenten. Eine Durchsuchung darf auch verdachtsunabhängig erfolgen, sofern dies im Rahmen der Grenzsicherung und Gefahrenabwehr erforderlich ist. (2) Angehörige medizinischer Dienste, der Exekutivbehörden sowie anderer staatlicher Institutionen können von vereinfachten oder stichprobenartigen Kontrollen ausgenommen werden. (3) Die Grenze darf ausschließlich an offiziell eingerichteten Grenzübergangsstellen überquert werden. Ausgenommen hiervon sind Luftfahrzeuge, die einer gesonderten Genehmigungspflicht unterliegen. Jeder andere Grenzübertritt gilt als unzulässig und ist verboten. (4) Die Exekutivbehörden sind befugt, den Grenzübertritt für Fahrzeuge ohne gültige Zulassung oder Registrierung jederzeit zu verwehren."
      },
      {
        "number": "§ 3",
        "title": "Voraussetzungen des Grenzübertritts",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Grenzübertritt ist nur Personen gestattet, die im Besitz eines gültigen Aufenthaltstitels gemäß dem Aufenthaltsgesetz (AufG) sind. (2) Die Exekutivbehörden sind befugt, den Aufenthaltstitel zu prüfen und bei fehlender Gültigkeit den Grenzübertritt zu verweigern. (3) Stellt sich bei der Kontrolle heraus, dass ein Aufenthaltstitels gefälscht, manipuliert oder unrechtmäßig erworben wurde, ist die betreffende Person unverzüglich festzuhalten und den zuständigen Strafverfolgungsbehörden zuzuführen."
      },
      {
        "number": "§ 4",
        "title": "Zuständigkeit",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Die Exekutivbehörden tragen die alleinige Verantwortung für die Sicherung der Grenze sowie für die Durchführung sämtlicher Grenzkontrollen. (2) Die Überwachung und Kontrolle der Grenze darf ausschließlich durch die Exekutivbehörden oder durch von ihnen autorisierte staatliche Stellen erfolgen. Eine eigenmächtige oder unbefugte Durchführung von Grenzkontrollen durch andere Personen oder Organisationen ist untersagt und stellt eine Straftat dar."
      },
      {
        "number": "§ 5",
        "title": "Überqueren",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "bei geschlossener Grenze (1) Es ist verboten, die Grenze zu überschreiten, wenn diese offiziell geschlossen ist oder durch behördliche Anordnung für den Grenzverkehr gesperrt wurde. Wer dennoch die Grenze überquert, begeht eine Straftat und wird gemäß den geltenden strafrechtlichen Bestimmungen verfolgt. (2) Von dieser Regelung ausgenommen sind Luftfahrzeuge, sofern deren Überflug durch die zuständigen Behörden genehmigt oder dienstlich von der Führungs-/Einsatzebene angeordnet wurde. (3) Exekutivbehörden, Rettungsdienste und staatliche Einsatzkräfte dürfen die Grenze bei geschlossener Lage nur auf ausdrückliche Weisung oder mit Sondergenehmigung überschreiten."
      },
      {
        "number": "§ 6",
        "title": "Anordnung der Grenzschließung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Die Entscheidung über die Schließung oder Öffnung der Grenze obliegt dem Chief Justice oder dessen Vertreter. Sollte keiner dieser Personen anwesend sein, so kann der Chief of Police oder der Sheriff entscheiden. (2) Eine Grenzschließung ist öffentlich bekannt zu machen und den Exekutivbehörden unverzüglich mitzuteilen. (3) In Fällen akuter Gefährdung der nationalen Sicherheit können Exekutivbehörden die Grenze vorübergehend schließen, sofern Gefahr im Verzug vorliegt und eine unverzügliche nachträgliche Entscheidung gemäß Absatz 1 erfolgt."
      },
      {
        "number": "§ 7",
        "title": "Entziehung der Kontrolle",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer sich vorsätzlich einer durch die Exekutivbehörden angeordneten Grenz- oder Personenkontrolle entzieht oder diese aktiv behindert, macht sich strafbar. (2) Eine Strafbarkeit liegt insbesondere dann vor, wenn die Entziehung der Kontrolle dazu dient, eine Straftat zu verbergen oder deren Aufklärung zu verhindern, oder verbotene Gegenstände, Personen oder Fahrzeuge unerlaubt über die Grenze zu verbringen. (3) Der Versuch ist strafbar."
      },
      {
        "number": "§ 8",
        "title": "Straf- und Bußgeldbestimmungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer vorsätzlich oder fahrlässig gegen die Bestimmungen dieser Verordnung verstößt, wird mit einer Geldstrafe bis zu 125.000 $ oder einer Freiheitsstrafe bis zu 40 Hafteinheiten bestraft. (2) In schweren Fällen, insbesondere bei wiederholtem illegalen Grenzübertritt, Schleusung oder Waffentransporten, kann eine Freiheitsstrafe bis zu 80 Hafteinheiten verhängt werden. (3) Fahrzeuge oder Gegenstände, die zur Tat verwendet wurden, können eingezogen werden."
      },
      {
        "number": "§ 9",
        "title": "Zusammenarbeit und Eskalationsverfahren",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Bei bewaffneten oder sicherheitsrelevanten Zwischenfällen an der Grenze erfolgt die Einsatzleitung durch die Exekutivbehörden. (2) Die National Guard darf nur auf ausdrückliche Anordnung des Chief Justice eingesetzt werden. (3) Die Eskalationsstufen und Kommunikationswege sind in einer internen Dienstanweisung festzulegen."
      }
    ]
  },
  {
    "id": "traffic",
    "title": "Traffic and Vehicle Code",
    "category": "Verkehrsrecht",
    "sourceFile": "S.A. STATE GOVERNMENT - Traffic and Vehicle Code.html",
    "sections": [
      {
        "number": "§ 1",
        "title": "Anwendungsbereich",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Diese Verordnung gilt für Kraftfahrzeuge mit einer durch Bauart bestimmten Höchstgeschwindigkeit von mehr als 30 km/h, die im öffentlichen Straßenverkehr betrieben werden. (2) Sie findet ebenfalls Anwendung auf Anhänger und Sonderfahrzeuge, soweit diese im öffentlichen Straßenverkehr genutzt werden oder einer Zulassungspflicht nach dieser Verordnung unterliegen."
      },
      {
        "number": "§ 2",
        "title": "Begriffsbestimmungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Im Sinne dieser Verordnung gilt als: a) Kraftfahrzeug: jedes maschinell angetriebene, nicht an Schienen gebundene Fahrzeug, b) Fahrzeughalter: die natürliche oder juristische Person, die das Fahrzeug auf eigene Rechnung nutzt und über dessen Einsatz entscheidet, c) öffentlicher Straßenverkehr: alle Verkehrsflächen, die der Allgemeinheit zur Nutzung offenstehen. Öffentlicher Verkehrsraum liegt insbesondere vor, wenn die betreffende Fläche ohne besondere Zugangsbeschränkung durch die Allgemeinheit genutzt werden kann. Nicht als öffentlicher Verkehrsraum gelten abgesperrte Veranstaltungsflächen, Rennstrecken oder sonstige Bereiche mit wirksam beschränktem Zugang. d) Tuningfahrzeug: ein Fahrzeug, das baulich oder technisch verändert wurde, ohne dass die Straßenzulassung aufgehoben wurde, e) Show Car: ein Fahrzeug, das ausschließlich zu Ausstellungs- oder Präsentationszwecken verwendet wird."
      },
      {
        "number": "§ 3",
        "title": "Grundsatz",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Teilnahme am Straßenverkehr erfordert ständige Vorsicht und gegenseitige Rücksicht. (2) Jeder hat sich so zu verhalten, dass niemand geschädigt, gefährdet oder mehr als unvermeidbar behindert oder belästigt wird. (3) Es gilt Rechtsverkehr. II. Fahrerlaubnis und Teilnahme am Straßenverkehr"
      },
      {
        "number": "§ 4",
        "title": "Fahrerlaubnis",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Zum Führen eines Kraftfahrzeugs ist die passende, gültige Fahrerlaubnis auf Verlangen vorzuzeigen. (2) Class A berechtigt zum Führen von Krafträdern. (3) Class B berechtigt zum Führen regulärer Kraftfahrzeuge, insbesondere Personenkraftwagen, Transporter und Pick-ups. (4) Class C berechtigt zum Führen schwerer Kraftfahrzeuge, insbesondere Lastkraftwagen, Busse und Schwertransporter. (5) Fahrräder sind führerscheinfrei."
      },
      {
        "number": "§ 5",
        "title": "Fußgänger",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Gehwege sind zu benutzen; Fahrbahnquerung zügig und an Querungshilfen. (2) Fahrzeugführer haben an Zebrastreifen anzuhalten, wenn ersichtlich ist, dass ein Fußgänger diesen überqueren will."
      },
      {
        "number": "§ 6",
        "title": "Mobile Endgeräte",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Dem Fahrzeugführer ist die händische Nutzung mobiler Endgeräte während der Fahrt verboten. (2) Zulässig sind fest verbaute oder freihändige Systeme, wenn Blick und Aufmerksamkeit nicht wesentlich abgelenkt werden."
      },
      {
        "number": "§ 7",
        "title": "Lärm und Abgase",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Unnötiger Lärm und vermeidbare Abgasbelästigungen sind verboten."
      },
      {
        "number": "§ 8",
        "title": "Schallzeichen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Hupen nur zur Warnung bei Gefahr. Missbräuchliche Nutzung ist untersagt. III. Zulassung und Registrierung von Fahrzeugen"
      },
      {
        "number": "§ 9",
        "title": "Notwendigkeit einer Zulassung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Kraftfahrzeuge dürfen auf öffentlichen Straßen nur in Betrieb gesetzt werden, wenn sie zum Verkehr zugelassen sind. (2) Die Zulassung erfolgt durch die Registrierung des Kraftfahrzeugs im amtlichen Fahrzeugregister beim Los Santos Amt. (3) Fahrzeuge ohne gültige Zulassung dürfen weder betrieben noch im öffentlichen Verkehrsraum abgestellt werden."
      },
      {
        "number": "§ 10",
        "title": "Zulassung und Haltereigenschaft von Fahrzeugen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Jedes Fahrzeug muss entweder auf eine natürliche oder auf eine juristische Person zugelassen werden. (2) Ein Fahrzeug darf nur einen rechtmäßigen Halter besitzen. Mehrfachzulassungen auf mehrere Personen sind unzulässig. (3) Der Halter ist verantwortlich für den verkehrssicheren Zustand des Fahrzeugs sowie für die Einhaltung der gesetzlichen Vorschriften über Betrieb und Nutzung."
      },
      {
        "number": "§ 11",
        "title": "Registrierung beim Los Santos Amt",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Das Fahrzeugregister wird durch das Los Santos Amt als zuständige Zulassungsbehörde geführt. (2) Die Registrierung muss unverzüglich, spätestens jedoch innerhalb von 48 Stunden nach dem Kauf erfolgen. (3) Nach Ablauf der Frist darf das Fahrzeug erst nach erfolgter Eintragung im Fahrzeugregister betrieben werden."
      },
      {
        "number": "§ 12",
        "title": "Anbringung von Kennzeichen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Fahrzeuge, die im öffentlichen Straßenverkehr geführt werden, müssen jederzeit mit einem ordnungsgemäß angebrachten Kennzeichen versehen sein. (2) Kennzeichenschilder dürfen weder verdeckt noch verschmutzt oder unleserlich sein. Form, Größe, Gestaltung und Beschriftung müssen den jeweils geltenden gesetzlichen Vorgaben und den Standards des Staates San Andreas entsprechen. (3) Das eigenmächtige Entfernen, Verändern oder Austauschen eines amtlich zugeteilten Kennzeichens ist unzulässig. (4) Bei Verlust oder Beschädigung des Kennzeichens ist der Halter verpflichtet, unverzüglich Ersatz beim zuständigen Los Santos Amt zu beantragen. (5) Bei Fahrzeugen, bei denen eine feste Anbringung des Kennzeichens aufgrund ihrer Bauart technisch nicht möglich ist, ist ein Gutachten durch einen zertifizierten Gutachter von Bennys Motorworks zu erstellen. Das Gutachten muss mindestens Angaben zum Fahrzeug, zum Fahrzeughalter sowie eine nachvollziehbare Begründung für die fehlende Möglichkeit der Kennzeichenanbringung enthalten. Zusätzlich ist eine schriftliche Genehmigung des Department of Justice einzuholen. Das Fahrzeug darf nur dann im öffentlichen Straßenverkehr geführt werden, wenn sowohl das Gutachten als auch die Genehmigung mitgeführt und auf Verlangen den zuständigen Behörden vorgelegt werden können. IV: Straßen, Verkehrszeichen und Vorfahrt"
      },
      {
        "number": "§ 13",
        "title": "Markierungen und Beschilderung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Gelbe Linien trennen Gegenverkehr; doppelte gelbe Linien dürfen nicht überfahren werden. (2) Weiße Linien ordnen Fahrstreifen. (3) Bodenmarkierungen und Verkehrszeichen sind verbindlich. (4) Highways und Freeways sind entsprechend beschildert."
      },
      {
        "number": "§ 14",
        "title": "Benutzung der Fahrbahn",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Kfz benutzen die Fahrbahn. Seitenstreifen ist nicht Fahrbahn. Gehwege dürfen nur zum Erreichen von Grundstücken überfahren werden. (2) Fahren entgegen der vorgeschriebenen Richtung ist verboten. (3) Auf Highways/Freeways gilt eine Mindestgeschwindigkeit von 80 km/h. Fahrzeuge, die bauartbedingt langsamer sind, dürfen diese Straßen nicht benutzen. Fahrräder sind auf Highways/Freeways verboten."
      },
      {
        "number": "§ 15",
        "title": "Signale und Zeichen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Aufgrund technischer Störungen gelten sämtliche Lichtzeichenanlagen (Ampeln) im Staatsgebiet San Andreas als außer Betrieb. An Kreuzungen mit Ampelanlagen ist daher „Rechts vor Links“ anzuwenden. Fahrzeugführer haben ihre Geschwindigkeit entsprechend anzupassen und dürfen die Kreuzung nur mit erhöhter Vorsicht befahren. (2) Stoppschilder und STOP-Markierungen verpflichten zum vollständigen Halt an der Haltelinie mit anschließender Vorfahrtgewährung. Sind vier Stoppschilder vorhanden, gilt rechts vor links; der Halt ist dennoch auszuführen. (3) Sonstige Richtungs-, Park- und Verbotszeichen sind verbindlich. (4) Weisungen von Exekutivbeamten gehen allen Signalen und Zeichen vor."
      },
      {
        "number": "§ 16",
        "title": "Vorfahrt",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) An Kreuzungen und Einmündungen gilt rechts vor links, sofern Zeichen nichts anderes bestimmen oder die Einfahrt aus Feld- oder Waldwegen erfolgt. (2) Weisungen der Exekutive sind zu befolgen und haben Vorrang. V. Geschwindigkeitsvorschriften"
      },
      {
        "number": "§ 17",
        "title": "Geschwindigkeiten",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Es darf nur so schnell gefahren werden, dass das Fahrzeug jederzeit beherrscht wird; Geschwindigkeit ist den Straßen-, Verkehrs- und Sichtverhältnissen anzupassen. (2) Verkehrsfluss darf nicht grundlos behindert werden. (3) Innerorts: Höchstgeschwindigkeit 100 km/h. (4) Außerorts: Höchstgeschwindigkeit 140 km/h. (5) Parkplätze: Schrittgeschwindigkeit, höchstens 20 km/h. (6) Highways/Freeways: keine Höchstgeschwindigkeit, Mindestgeschwindigkeit 80 km/h. Great Ocean Highway innerhalb Paleto Bay ist ausgenommen und gilt als innerorts. VI. Verhalten im Straßenverkehr"
      },
      {
        "number": "§ 18",
        "title": "Überholen und Vorbeifahren",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Überholen nur, wenn während des gesamten Vorgangs Gefährdungen ausgeschlossen sind und mit deutlich höherer Geschwindigkeit gefahren wird. (2) Grundsatz: links überholen. Rechtsüberholen nur auf mehrstreifigen Fahrbahnen bei zähfließendem Verkehr oder auf markierten Fahrstreifen zulässig. (3) Wer überholt wird, hat das Überholen zu ermöglichen."
      },
      {
        "number": "§ 19",
        "title": "Beleuchtung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Dämmerung, Dunkelheit und schlechte Sicht: vorgeschriebene Beleuchtung benutzen; Leuchten dürfen nicht verdeckt, defekt oder stark verschmutzt sein. (2) Blendendes Fernlicht ist bei Gegenverkehr oder dichtem Auffahren unverzüglich abzublenden. VII. Halten und Parken"
      },
      {
        "number": "§ 20",
        "title": "Begriffe",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Halten ist eine gewollte Fahrtunterbrechung; Parken liegt vor, wenn der Führer das Fahrzeug verlässt oder länger als 5 Minuten hält. (2) Halten und Parken sind unzulässig: a) unmittelbar vor oder hinter Kreuzungen, b) an roten Bordsteinen, c) vor Ausfahrten und Garageneinfahrten, d) an unübersichtlichen Stellen, e) wo Zeichen oder Markierungen es verbieten, f) auf Landstraßen sowie Highways/Freeways nur wenn dadurch eine Verkehrsgefährdung entsteht, g) vollständig auf Gehwegen. (3) Gelbe Bordsteine: nur Halten erlaubt. (4) Falschpark- und Haltverstöße treffen den letzten Fahrer; ist dieser nicht feststellbar, haftet der Halter."
      },
      {
        "number": "§ 21",
        "title": "Parkflächen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) In gekennzeichneten Parkflächen ist innerhalb der Markierung und in vorgegebener Richtung, alternativ in Fahrtrichtung zu parken. (2) Ohne Markierung ist möglichst weit rechts zu parken, ohne den Verkehrsfluss zu behindern. Ist der Durchfahrtsverkehr sonst nicht gewährleistet, dürfen vier- oder mehrrädrige Kraftfahrzeuge mit zwei Rädern halbseitig auf dem Gehweg parken; Krafträder mit zwei oder weniger Rädern parken vollständig auf der Fahrbahn."
      },
      {
        "number": "§ 22",
        "title": "Sonderparkplätze",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "Behindertenparkplätze dürfen nur mit gültigem Nachweis genutzt werden. VIII. Fahrzeugbeschaffenheit und Modifikationen"
      },
      {
        "number": "§ 23",
        "title": "Beschaffenheit der Fahrzeuge",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Fahrzeuge müssen so gebaut und ausgerüstet sein, a) dass ihr verkehrsüblicher Betrieb keine Personen oder Sachen vermeidbar gefährdet, behindert oder belästigt und b) die Insassen insbesondere bei Unfällen bestmöglich vor Verletzungen geschützt sind, sodass Art, Ausmaß und Folgen von Verletzungen so gering wie möglich bleiben. (2) Fahrzeuge müssen in straßenschonender, sicherheitstechnisch einwandfreier Bauweise hergestellt und erhalten werden. (3) Jedes Fahrzeug muss über funktionstüchtige Beleuchtungseinrichtungen verfügen, die den gesetzlichen Standards entsprechen. a) Die Frontscheinwerfer müssen weißes Licht (einschließlich Xenon-Technologie) ausstrahlen. b) Die Heckscheinwerfer müssen rot sein und dürfen keine andere Farbe aufweisen. c) Alle Beleuchtungseinrichtungen sind so zu betreiben, dass andere Verkehrsteilnehmer nicht geblendet oder abgelenkt werden. (4) Eine Unterbodenbeleuchtung ist zulässig, sofern a) sie statisch leuchtet, b) keine Blink-, Lauf- oder Farbwechselmuster aufweist, c) ihre Leuchtstärke den Straßenverkehr nicht beeinträchtigt. (5) Die Nutzung von Farbkombinationen oder Lichtwirkungen, die geeignet sind, Einsatzfahrzeuge zu imitieren, ist untersagt. Die Beleuchtung muss ordnungsgemäß und fest am Fahrzeug angebracht sein. (6) Der Einbau oder Betrieb von Unterbodenbeleuchtung, die gegen die Bedingungen des Absatzes 4 verstößt, ist im öffentlichen Straßenverkehr unzulässig. (7) Veränderungen am Reifenqualm oder optische Effekte, die nicht der realen Fahrzeugfunktion entsprechen, sind nur bei Tuningfahrzeugen oder Show Cars zulässig, sofern diese nicht am öffentlichen Straßenverkehr teilnehmen und ausschließlich zu Präsentations- oder Ausstellungszwecken betrieben werden. (8) Fahrzeuge, die den vorstehenden Anforderungen nicht entsprechen, dürfen im öffentlichen Straßenverkehr nicht betrieben werden. (9) Fahrzeuge, die mit Panzerplatten sowie schusssicheren Reifen oder Scheiben ausgestattet sind, dürfen nur durch staatliche Behörden oder ausdrücklich befugte Einsatzkräfte im öffentlichen Straßenverkehr geführt werden."
      },
      {
        "number": "§ 24",
        "title": "Modifizieren eines Fahrzeugs",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Das Modifizieren eines Fahrzeugs, durch welches die Anforderungen an die Beschaffenheit gemäß § 23 nicht mehr erfüllt werden, ist unzulässig. (2) Veränderungen an sicherheitsrelevanten Bauteilen, der Motorleistung, der Beleuchtung oder der Abgasanlage sind nur zulässig, wenn diese den gesetzlichen Bestimmungen entsprechen und keine Beeinträchtigung der Verkehrssicherheit, Umweltverträglichkeit oder Lärmschutzvorschriften verursachen. (3) Ausnahmen, insbesondere bei Umbauten von Show- oder Tuningfahrzeugen, bedürfen einer schriftlichen Genehmigung durch das Los Santos Amt oder eine staatlich anerkannte Prüfstelle oder Tuningwerkstatt. (4) Das Department of Justice ist ausschließlich für rechtliche Prüfungen zuständig und trifft keine technischen Entscheidungen über die Zulässigkeit von Fahrzeugumbauten. (5) Fahrzeuge, die zu reinen Präsentations- oder Ausstellungszwecken modifiziert wurden, dürfen nur außerhalb des öffentlichen Straßenverkehrs betrieben werden. (6) Das Entfernen oder Manipulieren von Fahrgestellnummern, Seriennummern oder amtlichen Kennzeichnungen ist verboten und wird gemäß den einschlägigen Strafbestimmungen geahndet."
      },
      {
        "number": "§ 25",
        "title": "Importierte Fahrzeuge",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Fahrzeuge, die aus einem anderen Staat eingeführt werden, dürfen im öffentlichen Straßenverkehr nur betrieben werden, wenn sie den Vorschriften dieser Verordnung entsprechen und eine technische Prüfung als auch ein Gutachten durch Bennys Motorworks erstellt worden ist. (2) Das Department of Justice kann eine vorläufige Betriebserlaubnis bis zur technischen Prüfung erteilen. (3) Der Fahrzeughalter hat auf Verlangen der zuständigen Behörde geeignete Nachweise über Herkunft, Eigentumsverhältnisse und technische Beschaffenheit des importierten Fahrzeugs vorzulegen. VIIII. Fahrtauglichkeit und Fahrzeugzustand"
      },
      {
        "number": "§ 26",
        "title": "Fahrzeugzustand",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Führer ist für die Verkehrssicherheit des Fahrzeugs verantwortlich. (2) Bei erheblichen Mängeln ist die Fahrt zu unterbrechen; Weiterfahrt bis zur Reparatur verboten. (3) Als erhebliche Mängel gelten insbesondere: a) fehlende oder unleserliche Kennzeichen, b) nicht funktionierende vorgeschriebene Beleuchtung, c) erhebliche Karosserie- oder Unfallschäden, d) fehlende Räder oder Fahrzeugteile, e) technische Defekte, welche die sichere Teilnahme am Straßenverkehr beeinträchtigen."
      },
      {
        "number": "§ 27",
        "title": "Fahreignung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Das Führen eines Fahrzeugs unter Alkohol- oder Drogeneinfluss ist verboten. (2) Fahruntüchtigkeit liegt insbesondere vor: a) bei erkennbaren alkohol- oder drogenbedingten Ausfallerscheinungen, b) ab einer Blutalkoholkonzentration von 0,8 Promille, c) bei einer positiven Betäubungsmittelprobe, sofern keine gültige ärztliche Verordnung oder sonstige gesetzliche Ausnahme vorliegt. (3) Die Exekutive ist berechtigt, bei begründetem Verdacht auf Alkohol- oder Drogenkonsum entsprechende Kontrollmaßnahmen und Tests anzuordnen. § 17 StPO bleibt unberührt. (4) Wer aufgrund körperlicher, geistiger oder sonstiger Einschränkungen nicht in der Lage ist, ein Fahrzeug sicher zu führen, gilt ebenfalls als fahruntüchtig. X. Sonderrechte und Veranstaltungen"
      },
      {
        "number": "§ 28",
        "title": "Einsatzfahrzeuge",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Das Police Department, Fire Department, Federal Investigation Bureau und Medical Department dürfen bei eingeschalteter Beleuchtung und Einsatzhorn Sonder- und Wegerechte in Anspruch nehmen, sofern ein tatsächlicher Einsatz oder eine dringende dienstliche Maßnahme vorliegt. Erhöhte Geschwindigkeit ist unter gebotener Rücksichtnahme zulässig. (2) Andere Verkehrsteilnehmer haben unverzüglich freie Bahn zu schaffen. Hierzu ist, sofern gefahrlos möglich, an den rechten Fahrbahnrand heranzufahren und anzuhalten. (3) Bei Aufforderung durch ein hinterherfahrendes Einsatzfahrzeug ist unverzüglich rechts heranzufahren und den Anweisungen der Einsatzkräfte Folge zu leisten. (4) Blaues und rotes Licht als Sondersignalanlage darf ausschließlich von staatlichen Behörden und hierzu berechtigten Einsatzfahrzeugen verwendet werden."
      },
      {
        "number": "§ 29",
        "title": "Befreiungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Bei wirksamer Inanspruchnahme von Sonder- und Wegerechten sind die Vorschriften der §§ 3 bis 19 insoweit nicht anzuwenden, wie dies zur Erfüllung des Einsatzauftrages erforderlich ist. (2) Die Vorschriften der §§ 20 bis 22 über das Halten und Parken gelten während eines Einsatzes mit aktivierter Sondersignalanlage nicht. (3) Sonder- und Wegerechte entbinden nicht von der Pflicht, die öffentliche Sicherheit zu berücksichtigen und Gefährdungen Dritter nach Möglichkeit zu vermeiden."
      },
      {
        "number": "§ 30",
        "title": "Veranstaltungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Veranstaltungen mit übermäßiger Straßennutzung, insbesondere Rennen, Fahrzeugtreffen, Demonstrationen oder sonstige verkehrsbeeinträchtigende Ereignisse, bedürfen der vorherigen Genehmigung der zuständigen Exekutive. (2) Der Veranstalter trägt die Verantwortung für die ordnungsgemäße Durchführung der Veranstaltung und hat die Auflagen der zuständigen Exekutive einzuhalten. (3) Illegale Rennen sind verboten. (4) Als Rennen gilt jede Wettbewerbssituation, bei der mindestens zwei Fahrzeuge mit dem Ziel einer höheren Geschwindigkeit, einer kürzeren Fahrzeit oder einer Rangfolge gegeneinander antreten. (5) Die zuständige Exekutive kann Veranstaltungen jederzeit untersagen, abbrechen oder mit Auflagen versehen, sofern dies zur Aufrechterhaltung der öffentlichen Sicherheit oder Ordnung erforderlich ist. XI. Maßnahmen der Behörden"
      },
      {
        "number": "§ 31",
        "title": "Maßnahmen bei Verstößen gegen Zulassungs- und Fahrzeugvorschriften",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wird eine Straftat oder Ordnungswidrigkeit mit einem nicht zugelassenen Fahrzeug begangen, sind die Exekutivbehörden berechtigt, das betreffende Fahrzeug zur Überprüfung der Zulässigkeit und Identität an das Los Santos Amt für Fahrzeugzulassung zu begleiten, um sicherzustellen, dass eine ordnungsgemäße Registrierung vorliegt. (2) Wird ein Fahrzeug wiederholt ohne gültige Zulassung im öffentlichen Straßenverkehr festgestellt, sind die Exekutivbehörden befugt, das Fahrzeug sicherzustellen oder zu beschlagnahmen. (3) Wiederholt im Sinne dieser Vorschrift bedeutet mindestens zwei festgestellte Verstöße innerhalb von 30 Tagen. (4) Entspricht ein Fahrzeug nicht den Bestimmungen dieser Verordnung, können Exekutivbehörden die Weiterfahrt untersagen und die Vorführung bei einem anerkannten Mechanikerbetrieb anordnen. Hiervon ausgenommen ist die Verwendung von Unterbodenbeleuchtung, sofern diese den Anforderungen des § 23 Abs. 4 entspricht, keine unmittelbare Gefährdung des Straßenverkehrs darstellt und im Bedarfsfall deaktiviert werden kann. Gleiches gilt für nachgerüstete Sonderausstattungen an Tuning- oder Showfahrzeugen, sofern diese Fahrzeuge nicht im öffentlichen Straßenverkehr betrieben werden. (5) Werden die festgestellten Mängel oder Verstöße nicht innerhalb einer Frist von sieben Tagen behoben, kann das Fahrzeug bis zur Nachprüfung durch die zuständigen Exekutivbehörden vorübergehend stillgelegt werden."
      },
      {
        "number": "§ 32",
        "title": "Fahrverbot",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Exekutivbeamte können bei schwerwiegenden oder wiederholten Verkehrsverstößen ein befristetes Fahrverbot anordnen, sofern dies gesetzlich vorgesehen ist. (2) Während eines Fahrverbots ist das Führen von Kraftfahrzeugen im öffentlichen Straßenverkehr verboten. (3) Wer trotz eines wirksamen Fahrverbots ein Kraftfahrzeug führt, handelt ordnungswidrig, sofern nicht eine strengere Strafvorschrift Anwendung findet."
      },
      {
        "number": "§ 33",
        "title": "Stilllegung und Wiederzulassung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Fahrzeuge, die erheblich gegen diese Verordnung verstoßen oder als verkehrsunsicher gelten, können durch das Los Santos Amt oder die Exekutivbehörden stillgelegt werden. (2) Stillgelegte Fahrzeuge dürfen weder im öffentlichen Straßenverkehr geführt noch im öffentlichen Verkehrsraum abgestellt werden. (3) Eine Wiederzulassung darf erst erfolgen, wenn sämtliche festgestellten Mängel behoben wurden und die Vorschriften dieser Verordnung erfüllt sind. (4) Die Stilllegung ist aktenkundig zu machen und dem Halter schriftlich mitzuteilen."
      },
      {
        "number": "§ 34",
        "title": "Abschleppen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Offiziell registrierte Abschleppunternehmen sowie die Exekutive dürfen Fahrzeuge versetzen oder in Verwahrung nehmen, wenn diese a) den Verkehr behindern, b) eine Gefahr für die öffentliche Sicherheit oder Ordnung darstellen, c) nicht zugelassen sind, d) als Beweismittel dienen oder e) verbotswidrig geparkt wurden. (2) Die Kosten des Abschleppens, der Verwahrung und sonstiger notwendiger Maßnahmen trägt der Fahrzeughalter. (3) Die Herausgabe eines abgeschleppten oder verwahrten Fahrzeugs kann bis zur vollständigen Begleichung der entstandenen Kosten verweigert werden."
      },
      {
        "number": "§ 35",
        "title": "Sicherstellung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Fahrzeuge können zur Gefahrenabwehr sichergestellt werden, wenn mildere Mittel ungeeignet oder offensichtlich nicht ausreichend sind. (2) Bei einer gegenwärtigen Gefahr für Personen, bedeutende Sachwerte oder die öffentliche Sicherheit ist die Sicherstellung zulässig. (3) Soweit ausreichend, ist der bloßen Untersagung der Weiterfahrt Vorrang vor einer Sicherstellung einzuräumen. (4) Sichergestellte Fahrzeuge dürfen nur an den rechtmäßigen Eigentümer, Halter oder eine von diesem bevollmächtigte Person herausgegeben werden."
      },
      {
        "number": "§ 36",
        "title": "Fahrzeugnutzung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Bei erheblicher Gefährdung der öffentlichen Sicherheit oder des Straßenverkehrs kann die Weiterfahrt durch die Exekutive untersagt werden. (2) Mit einer gültigen ausländischen Fahrerlaubnis darf unter Berücksichtigung der Bestimmungen des § 4 ein Fahrzeug im öffentlichen Straßenverkehr geführt werden. (3) Die Exekutive ist berechtigt, die Vorlage einer Fahrerlaubnis sowie geeigneter Identitätsnachweise zu verlangen. XII. Besondere Verkehrsvorschriften"
      },
      {
        "number": "§ 37",
        "title": "Bahnübergänge",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Vor Bahnübergängen ist mit mäßiger Geschwindigkeit und erhöhter Aufmerksamkeit zu fahren. (2) Bei Blinklicht, Schrankenbewegung oder hörbarem Warnsignal ist vor dem Bahnübergang anzuhalten. (3) Das Umfahren, Umgehen oder anderweitige Umfahren geschlossener oder sich schließender Schranken ist verboten. (4) Fahrzeuge dürfen nicht auf Bahnübergängen angehalten oder geparkt werden, sofern dies nicht durch die Verkehrslage unvermeidbar ist."
      },
      {
        "number": "§ 38",
        "title": "Sicherheitszonen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) In gekennzeichneten Bereichen vor Universitäten, Krankenhäusern, Feuerwachen, Polizeidienststellen und Einrichtungen der Rettungsdienste ist mit besonderer Vorsicht und Rücksicht zu fahren. (2) Einsatzbereiche sowie Zu- und Ausfahrten von Einsatzfahrzeugen sind jederzeit freizuhalten. (3) Das Halten, Parken oder sonstige Abstellen von Fahrzeugen in einer Weise, die Einsatzfahrzeuge behindert oder verzögert, ist unzulässig."
      },
      {
        "number": "§ 39",
        "title": "Fahrgastbeförderung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer gewerblich Fahrgäste befördert, benötigt einen gültigen Personenbeförderungsschein. (2) Der Personenbeförderungsschein ist auf Verlangen den zuständigen Behörden vorzulegen. (3) Der Fahrzeugführer hat dafür Sorge zu tragen, dass die Beförderung sicher erfolgt und Fahrgäste nicht gefährdet werden. (4) Die gewerbliche Personenbeförderung ohne gültigen Personenbeförderungsschein ist unzulässig. XIII. Verkehrsunfälle und Haftung"
      },
      {
        "number": "§ 40",
        "title": "Verkehrsunfall",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Jeder Unfallbeteiligte hat unverzüglich anzuhalten, die Unfallstelle abzusichern, im Rahmen seiner Möglichkeiten Erste Hilfe zu leisten sowie Personalien und Fahrzeugdaten mit den übrigen Beteiligten auszutauschen. (2) Wer sich nach einem Verkehrsunfall vom Unfallort entfernt, bevor die Feststellung seiner Person, seines Fahrzeugs und seiner Beteiligung am Unfall ermöglicht wurde, begeht Fahrerflucht. (3) Bei Personenschäden, erheblichem Sachschaden oder einer Beeinträchtigung des Verkehrsflusses ist unverzüglich die zuständige Exekutive zu verständigen. (4) Unfallbeteiligte haben bis zum Eintreffen der Exekutive am Unfallort zu verbleiben, sofern dies aufgrund der Umstände des Einzelfalls erforderlich oder angeordnet wurde. (5) Fahrzeuge und sonstige Unfallspuren dürfen vor Abschluss der notwendigen Feststellungen nicht verändert oder beseitigt werden, es sei denn, dies ist zur Gefahrenabwehr, zur Rettung von Personen oder zur Wiederherstellung der Verkehrssicherheit zwingend erforderlich. (6) Als Unfallbeteiligter gilt jede Person, deren Verhalten nach den Umständen zur Verursachung des Verkehrsunfalls beigetragen haben kann."
      },
      {
        "number": "§ 41",
        "title": "Haftung",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Der Fahrzeugführer ist verpflichtet, dafür Sorge zu tragen, dass das von ihm geführte Fahrzeug ordnungsgemäß zum Verkehr auf öffentlichen Straßen zugelassen ist. (2) Der Fahrer haftet für den Fahrzeugzustand, die Fahrweise sowie für alle während der Nutzung verursachten Verstöße. (3) Der Fahrer ist darüber hinaus verantwortlich für den Inhalt des Fahrzeugs, sofern dieser ihm eindeutig zugeordnet werden kann. (4) Ist der Fahrzeugführer im Falle eines Verkehrsverstoßes oder Schadensereignisses nicht eindeutig feststellbar oder nicht erreichbar, haftet der eingetragene Halter des Fahrzeugs für daraus resultierende Verwaltungs-, Bußgeld- oder Strafverfahren. (5) Der Halter haftet sowohl für den Fahrzeugzustand als auch für den Inhalt des Fahrzeugs, sofern der Fahrer nicht ermittelt werden kann. (6) Die Halterhaftung entfällt, wenn: a) das Fahrzeug zum Tatzeitpunkt als gestohlen gemeldet war oder b) nachweislich eine andere Person die alleinige Verantwortung für den Inhalt des Fahrzeugs trägt. (7) Der Halter bleibt verpflichtet, den Diebstahl unverzüglich und nachweislich zu melden. Unterlässt er dies, kann die Haftungsbefreiung nicht geltend gemacht werden. XIIII. Straftaten und Ordnungswidrigkeiten"
      },
      {
        "number": "§ 42",
        "title": "Gefährlicher Eingriff in den Straßenverkehr",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Wer die Sicherheit des Straßenverkehrs gefährdet, indem er Fahrzeuge, Verkehrseinrichtungen oder sonstige Anlagen beschädigt, zerstört oder verändert, Hindernisse bereitet oder einen vergleichbar gefährlichen Eingriff vornimmt und dadurch Leib, Leben oder bedeutende Sachwerte gefährdet, begeht eine Straftat. (2) Ein gefährlicher Eingriff in den Straßenverkehr liegt insbesondere vor, wenn a) Gegenstände auf Verkehrsflächen abgelegt oder zurückgelassen werden, b) Verkehrszeichen, Absperrungen oder Verkehrseinrichtungen entfernt, beschädigt oder manipuliert werden, c) Fahrzeuge vorsätzlich als Hindernis oder zur Blockade des Verkehrs eingesetzt werden, d) andere Verkehrsteilnehmer vorsätzlich zu Ausweich- oder Bremsmanövern gezwungen werden. (3) Der Versuch ist strafbar. (4) Weitergehende Strafvorschriften des Strafgesetzbuches bleiben unberührt."
      },
      {
        "number": "§ 43",
        "title": "Ordnungswidrigkeiten und Strafbestimmungen",
        "chapter": {
          "number": "I.",
          "title": "Allgemeine Bestimmungen"
        },
        "text": "(1) Ordnungswidrig handelt, wer vorsätzlich oder fahrlässig a) ein nicht zugelassenes Fahrzeug betreibt (§ 9), b) Kennzeichen verdeckt, entfernt, verändert oder unleserlich macht (§ 12), c) ein Kennzeichen verwendet, das einem anderen Fahrzeug zugeteilt wurde (§ 12), d) unzulässige Umbauten oder Modifikationen vornimmt (§ 24), e) trotz Stilllegung ein Fahrzeug führt (§ 33), f) gegen sonstige Vorschriften dieses Gesetzes verstößt, soweit die Handlung nicht bereits als Straftat geahndet wird. (2) Straftaten nach diesem Gesetz sowie nach dem Strafgesetzbuch des Staates San Andreas bleiben unberührt. (3) Zuwiderhandlungen gegen die Vorschriften dieses Gesetzes können nach Maßgabe der StKatV mit Verwarnungen, Bußgeldern, Fahrverboten oder sonstigen Maßnahmen geahndet werden. (4) Soweit einzelne Handlungen sowohl einen Verstoß gegen dieses Gesetz als auch gegen das Strafgesetzbuch darstellen, geht die strafrechtliche Ahndung vor."
      }
    ]
  },
{
  "id": "enforcement",
  "title": "ENFORCEMENT CODE (EC)",
  "category": "Gesetzbuch",
  "sourceFile": "S.A. STATE GOVERNMENT - Enforcement Code.html",
  "sections": [
    {
      "number": "§ 1",
      "title": "Anwendungsbereich",
      "chapter": {
        "number": "I.",
        "title": "Allgemeines"
      },
      "text": "Dieses Gesetz regelt die Verfahren der Strafverfolgung und der Exekutive und sämtliche Gerichtsverfahren. Dieses Gesetz findet auf das gerichtliche Zivilverfahren analoge Anwendung."
    },
    {
      "number": "§ 2",
      "title": "Unschuldsvermutung",
      "chapter": {
        "number": "I.",
        "title": "Allgemeines"
      },
      "text": "Jede Person gilt bis zum rechtskräftigen Beweis ihrer Schuld als unschuldig. Rechtskräftig ist eine Entscheidung, die mangels einlegbarer Rechtsmittel unanfechtbar geworden ist."
    },
    {
      "number": "§ 3",
      "title": "Grundsätze der Strafverfolgung",
      "chapter": {
        "number": "I.",
        "title": "Allgemeines"
      },
      "text": "(1) Ab 90 Hafteinheiten Haftandrohung ist zwingend eine Hauptverhandlung durchzuführen. Auf Antrag der Staatsanwaltschaft kann die Richterschaft davon absehen, wenn das öffentliche Interesse an einer schnellen erstinstanzlichen Entscheidung überwiegt. (2) Unter 90 Hafteinheiten kann die Exekutive über die Strafe entscheiden, insbesondere hinsichtlich der Strafzumessung und möglichen Bewährungsentscheidungen."
    },
    {
      "number": "§ 4",
      "title": "Rechtsaufsichtsfunktion des Department of Justice",
      "chapter": {
        "number": "I.",
        "title": "Allgemeines"
      },
      "text": "(1) Das Department of Justice überwacht fortlaufend die Rechtmäßigkeit exekutiver Maßnahmen (Rechtsaufsicht). (2) Die Staatsanwaltschaft ist befugt, bei Vorliegen konkreter Anhaltspunkte für ein mögliches Fehlverhalten Prüfungen und Ermittlungen einzuleiten. (3) Die Exekutive ist verpflichtet, auf Anforderung der Staatsanwaltschaft alle Unterlagen und Einsatzberichte vorzulegen."
    },
    {
      "number": "§ 5",
      "title": "Aufgaben und Zuständigkeiten der Exekutive",
      "chapter": {
        "number": "II.",
        "title": "Aufgaben und Pflichten der Exekutive"
      },
      "text": "(1) Die Exekutive hat die Aufgabe, Gefahren für die öffentliche Sicherheit und Ordnung abzuwehren, Straftaten zu verhüten, zu verfolgen sowie Hilfe in Not- und Gefahrenlagen zu leisten. (2) Sie hat dabei die verfassungsmäßige Ordnung, die Rechte des Einzelnen und das Prinzip der Verhältnismäßigkeit zu wahren. (3) Die Exekutive leistet Vollzugshilfe und Amtshilfe für andere staatliche Behörden, soweit keine anderen Regelungen entgegenstehen. (4) Maßnahmen, die in Grundrechte eingreifen, sind nur zulässig, wenn sie auf einer gesetzlichen Grundlage beruhen. (5) Als Exekutivbehörden im Sinne dieses Gesetzes gelten das LSPD, das BCSO, das FIB sowie untergeordnete Behörden des allgemeinen Polizeivollzugsdienstes. (6) Für die Staatsanwaltschaft beim DOJ finden die Vorschriften dieses Gesetzes mit der Maßgabe Anwendung, dass die Staatsanwaltschaft freiheitsentziehende Maßnahmen zum Zwecke der Sicherung des Strafverfahrens gegenüber den übrigen Exekutivbehörden anordnen darf. Das in der Constitution of San Andreas verankerte Evokationsrecht des Supreme Attorney bleibt unberührt."
    },
    {
      "number": "§ 6",
      "title": "Neutralität der Exekutive",
      "chapter": {
        "number": "II.",
        "title": "Aufgaben und Pflichten der Exekutive"
      },
      "text": "(1) Die Exekutive handelt in allen dienstlichen Angelegenheiten unparteiisch und verpflichtet sich der Wahrung der wirtschaftlichen, politischen, weltanschaulichen und religiösen Neutralität. (2) Bei Exekutivbehörden beschäftigte Mitarbeiter sind ausschließlich Exekutivbeamte. Exekutivbeamte dürfen im Dienst ihre amtliche Stellung nicht dazu verwenden, persönliche Interessen zu verfolgen."
    },
    {
      "number": "§ 7",
      "title": "Pflicht zur Selbstlegitimation",
      "chapter": {
        "number": "II.",
        "title": "Aufgaben und Pflichten der Exekutive"
      },
      "text": "(1) Exekutivbeamte sind verpflichtet, sich auf Verlangen persönlich gegenüber dem Supreme Attorney, der Staatsanwaltschaft, der Richterschaft sowie der Leitung anderer Exekutivbehörden unverzüglich mit ihrem Dienstausweis auszuweisen. (2) Gegenüber anderen Personen müssen sich Beamte, auf verlangen, mit ihrem Dienstausweis ausweisen, wenn Sie gegenüber diesen Personen Maßnahmen nach diesem Gesetz vollziehen wollen. Bei Gefahr im Verzug entfällt diese Pflicht, ist jedoch nach Beseitigung der Gefahr unverzüglich nachzuholen. (3) Eine Verweigerung oder unberechtigte Verzögerung stellt einen Verstoß gegen dieses Gesetz dar. Ohne Selbstlegitimation sind nach diesem Gesetz getroffene Maßnahmen rechtswidrig. Absatz 2 Satz 2 bleibt unberührt. (4) Personen, die von Maßnahmen nach diesem Gesetz betroffen sind, müssen Anordnungen von Exekutivbeamten solange nicht Folge leisten, bis diese sich gemäß Absatz 2 legitimiert haben."
    },
    {
      "number": "§ 8",
      "title": "Pflichtgemäßes Ermessen",
      "chapter": {
        "number": "II.",
        "title": "Aufgaben und Pflichten der Exekutive"
      },
      "text": "(1) Die Exekutive handelt nach pflichtgemäßem Ermessen. Kommen mehrere Mittel in Betracht, genügt die Bestimmung eines geeigneten. Auf Antrag ist der betroffenen Person ein gleichwertiges, milderes Mittel zu gestatten, sofern der Zweck dadurch ebenso erreicht wird. (2) Eine Maßnahme muss geeignet, erforderlich und angemessen sein, um den verfolgten Zweck zu erreichen. (3) Von mehreren geeigneten Maßnahmen ist diejenige zu wählen, die den Einzelnen und die Allgemeinheit am wenigsten beeinträchtigt (mildestes Mittel). (4) Eine Maßnahme darf nur solange andauern, bis ihr Zweck erreicht oder erkennbar nicht mehr erreichbar ist."
    },
    {
      "number": "§ 9",
      "title": "Gefahr im Verzug",
      "chapter": {
        "number": "II.",
        "title": "Aufgaben und Pflichten der Exekutive"
      },
      "text": "(1) Bei Gefahr im Verzug ist ein sofortiges Handeln auch ohne vorherige richterliche Anordnung oder Genehmigung zulässig, muss aber nachträglich dokumentiert und richterlich bestätigt werden. (2) Gefahr im Verzug liegt vor, wenn die Einholung einer richterlichen oder staatsanwaltschaftlichen Anordnung den Erfolg der Maßnahme durch Zeitverlust gefährden würde. Dies ist insbesondere bei drohender Beweismittelvernichtung, unmittelbarer Fluchtgefahr oder bei akuter Gefahr für Leib und Leben anzunehmen."
    },
    {
      "number": "§ 10",
      "title": "Strafvollzug",
      "chapter": {
        "number": "II.",
        "title": "Aufgaben und Pflichten der Exekutive"
      },
      "text": "(1) Die Exekutivbehörden sind für die ordnungsgemäße Durchführung des Strafvollzugs zuständig. (2) Sie haben sicherzustellen, dass sich alle verurteilten Personen ab 60 Hafteinheiten zu festgelegten Terminen einfinden. Die Termine können durch das Department of Justice im Einzelfall angepasst werden. (3) Das Department of Justice erhält nach jedem Termin eine aktualisierte Liste aller erschienenen und nicht erschienenen Personen. (4) Nicht erschienene Personen sind zur Fahndung auszuschreiben und bei Auffinden festzunehmen und dem Strafvollzug zuzuführen."
    },
    {
      "number": "§ 11",
      "title": "Befugnisgeneralklausel",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Die Exekutive darf Maßnahmen treffen, um konkrete Gefahren für die öffentliche Sicherheit oder Ordnung abzuwehren. (2) Soweit besondere Gesetze oder Verordnungen Befugnisse nicht abschließend regeln, gelten ergänzend die Vorschriften dieses Gesetzes. (3) Maßnahmen sind zu dokumentieren und die Dokumentation auf Verlangen dem Dienstvorgesetzten oder dem DOJ vorzulegen."
    },
    {
      "number": "§ 12",
      "title": "Inanspruchnahme verantwortlicher Personen",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Maßnahmen sind gegen die Person zu richten, die die Gefahr verursacht, oder verursachen wird. (2) Wird die Gefahr durch eine beauftragte Person verursacht, kann auch der Auftraggeber in Anspruch genommen werden. (3) Bestehen mehrere Verantwortliche, kann die Exekutive nach Ermessen bestimmen, gegen wen die Maßnahme vorrangig zu richten ist."
    },
    {
      "number": "§ 13",
      "title": "Inanspruchnahme nicht verantwortlicher Personen",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Maßnahmen dürfen auch gegen unbeteiligte Personen gerichtet werden, wenn: a) eine gegenwärtige erhebliche Gefahr besteht, b) Maßnahmen gegen die Verantwortlichen nicht oder nicht rechtzeitig möglich sind, c) die Exekutive die Gefahr selbst nicht rechtzeitig abwehren kann, d) die betroffene Person ohne erhebliche Eigengefährdung oder Verletzung höherer Pflichten handeln kann. (2) Die Maßnahme ist zu beenden, sobald die Gefahr auf andere Weise abgewehrt werden kann."
    },
    {
      "number": "§ 14",
      "title": "Identitätsfeststellung",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Die Exekutive darf die Identität einer Person feststellen, wenn: a) dies zur Gefahrenabwehr oder Strafverfolgung erforderlich ist, b) die Exekutive eine allgemeine Personenkontrolle durchführt und dies vorher ausdrücklich so angekündigt hat, b) sich die Person an einem gefährdeten Ort aufhält, c) Tatsachen die Annahme rechtfertigen, dass sie Informationen zu einer Straftat hat oder d) sie sich in einem Kontrollbereich befindet. (2) Die Person kann in den Fällen des Absatzes 1 angehalten, befragt und verpflichtet werden, Ausweisdokumente vorzulegen. (3) Ist die Identität anders nicht oder nur mit unverhältnismäßigem Aufwand feststellbar, darf die Person vorläufig festgehalten werden."
    },
    {
      "number": "§ 15",
      "title": "Exekutivgewahrsam",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Eine Person darf in Exekutivgewahrsam genommen werden, wenn: a) dies zu ihrem Schutz vor Selbst- oder Fremdgefährdung erforderlich ist, b) es notwendig ist, eine unmittelbar bevorstehende Straftat oder erhebliche Ordnungswidrigkeit zu verhindern oder c) sie ohne Erlaubnis das Polizeigewahrsam verlassen hat. (2) Der Polizeigewahrsam darf nur solange andauern, wie sein Zweck dies erfordert, höchstens jedoch 45 Minuten."
    },
    {
      "number": "§ 16",
      "title": "Platzverweisung und Aufenthaltsverbot",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Zur Abwehr einer Gefahr kann eine Person vorübergehend von einem Ort verwiesen oder ihr das Betreten untersagt werden. (2) Ein Aufenthaltsverbot kann bis zu 3 Stunden verhängt werden, wenn Tatsachen belegen, dass die Person dort Straftaten begehen wird oder dazu beitragen könnte. (3) Bei fortgesetzter Störung kann die Maßnahme verlängert werden, wenn das Department of Justice zustimmt. (4) Bei erheblicher Störung einer Maßnahme, kann der Verursacher für die Dauer der Maßnahme in Polizeigewahrsam genommen werden. Der § 15 Abs. 2 bleibt unberührt."
    },
    {
      "number": "§ 17",
      "title": "Sicherstellung von Sachen",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Die Exekutive kann eine Sache sicherstellen, wenn: a) sie zur Abwehr einer gegenwärtigen Gefahr erforderlich ist, b) sie ein Beweismittel in einem Strafverfahren darstellt, c) sie dem Eigentümer entzogen werden muss, um Schaden abzuwenden oder d) sie illegal erlangt wurde, verboten oder gefährlich ist. (2) Über jede Sicherstellung ist ein Protokoll anzufertigen. (3) Die Rückgabe erfolgt, sobald der Sicherungsgrund entfällt, spätestens jedoch nach richterlicher Entscheidung."
    },
    {
      "number": "§ 18",
      "title": "Umgang mit sichergestellten Gegenständen",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Gegenstände, die im Rahmen eines Einsatzes oder Strafverfahrens sichergestellt oder beschlagnahmt wurden, sind der berechtigten Person auf Nachfrage ohne schuldhaftes zögern (unverzüglich) zurückzugeben, sobald sie für Beweiszwecke nicht mehr erforderlich sind. Holt der Eigentümer einer Sache oder ein von ihm Bevollmächtigter die Sache trotz Ermöglichung innerhalb von 7 Tagen nicht ab, ist die Sache zu unverzüglich vernichten. (2) Gegenstände, deren Besitz gesetzlich verboten ist oder die eine Gefahr für die öffentliche Sicherheit darstellen, sind von der Rückgabe ausgeschlossen und nach Verfall des Beweisverwertungszwecks unverzüglich zu vernichten."
    },
    {
      "number": "§ 19",
      "title": "Fesselung von Personen",
      "chapter": {
        "number": "III.",
        "title": "Maßnahmen der Gefahrenabwehr"
      },
      "text": "(1) Eine Person darf gefesselt werden, wenn Tatsachen die Annahme rechtfertigen, dass sie: a) Beamte oder Dritte angreift, b) fliehen oder befreit werden soll oder c) sich selbst verletzt. (2) Fesselungen sind zu lösen, sobald der Sicherungszweck entfällt."
    },
    {
      "number": "§ 20",
      "title": "Ersatzvornahme",
      "chapter": {
        "number": "Im",
        "title": "Übrigen dürfen Personen zum Zwecke der Sicherung eines Strafverfahrens gefesselt werden."
      },
      "text": "Wird die Verpflichtung, eine Handlung vorzunehmen, deren Vornahme durch einen anderen möglich ist (vertretbare Handlung), nicht oder nicht vollständig erfüllt, so können die Exekutivbehörden die Handlung selbst ausführen oder durch eine andere Stelle oder eine dritte Person ausführen lassen. Die pflichtige Person sowie Personen, die Mitgewahrsam an den beweglichen oder unbeweglichen Sachen der pflichtigen Person haben, sind zur Duldung der Ersatzvornahme verpflichtet."
    },
    {
      "number": "§ 21",
      "title": "Unmittelbarer Zwang",
      "chapter": {
        "number": "Im",
        "title": "Übrigen dürfen Personen zum Zwecke der Sicherung eines Strafverfahrens gefesselt werden."
      },
      "text": "(1) Die Exekutive darf unmittelbaren Zwang anwenden, wenn andere Mittel ungeeignet oder erfolglos sind oder eine sofortige Handlung erforderlich ist. (2) Jede Anwendung ist zu dokumentieren und verhältnismäßig auszuführen. (3) Unmittelbarer Zwang ist die Einwirkung auf Personen oder Sachen durch körperliche Gewalt, Hilfsmittel oder Waffen. (4) Körperliche Gewalt umfasst jede unmittelbare physische Einwirkung auf Personen oder Sachen. (5) Hilfsmittel körperlicher Gewalt sind insbesondere: Fesseln, Reiz- und Betäubungsstoffe, technische Sperren, Dienstfahrzeuge oder Sprengmittel zur Türöffnung. (6) Zulässige Waffen richten sich nach den Bestimmungen des Waffenrechts."
    },
    {
      "number": "§ 22",
      "title": "Androhung",
      "chapter": {
        "number": "Im",
        "title": "Übrigen dürfen Personen zum Zwecke der Sicherung eines Strafverfahrens gefesselt werden."
      },
      "text": "(1) Unmittelbarer Zwang ist vor seiner Anwendung anzudrohen, sofern die Lage es erlaubt. (2) Die Androhung kann bei Vorliegen von Gefahr im Verzug entfallen. (3) Als Androhung des Schusswaffengebrauchs gilt auch die Abgabe eines Warnschusses."
    },
    {
      "number": "§ 23",
      "title": "Schusswaffengebrauch",
      "chapter": {
        "number": "Im",
        "title": "Übrigen dürfen Personen zum Zwecke der Sicherung eines Strafverfahrens gefesselt werden."
      },
      "text": "(1) Schusswaffen dürfen nur eingesetzt werden, wenn andere Maßnahmen des unmittelbaren Zwangs erfolglos waren oder offensichtlich keinen Erfolg versprechen. (2) Gegen Personen ist ihr Gebrauch nur zulässig, wenn: a) eine gegenwärtige Gefahr für Leib oder Leben abzuwehren ist, b) ein schweres Verbrechen unmittelbar bevorsteht, c) eine flüchtende Person dringend eines Verbrechens verdächtigt wird und bewaffnet sein könnte. (3) Der Einsatz ist unzulässig, wenn Unbeteiligte mit hoher Wahrscheinlichkeit gefährdet werden - außer, es besteht unmittelbare Lebensgefahr für andere."
    },
    {
      "number": "§ 24",
      "title": "Hilfeleistung für Verletzte",
      "chapter": {
        "number": "Im",
        "title": "Übrigen dürfen Personen zum Zwecke der Sicherung eines Strafverfahrens gefesselt werden."
      },
      "text": "Nach Anwendung unmittelbaren Zwangs oder nach Schusswaffengebrauch ist Verletzten unverzüglich Hilfe zu leisten und, soweit erforderlich, ärztliche Versorgung sicherzustellen. Die allgemeine Pflicht zur Hilfeleistung im Notfall bleibt unberührt."
    },
    {
      "number": "§ 25",
      "title": "Beginn des Ermittlungsverfahrens",
      "chapter": {
        "number": "IV.",
        "title": "Strafverfolgung"
      },
      "text": "(1) Erhalten die Staatsanwaltschaft oder die Exekutivbehörden Kenntnis davon, dass jemand eine Straftat begangen hat, so leiten sie ein Ermittlungsverfahren ein. Stellt jemand Strafanzeige oder Strafantrag, wird ebenfalls ein Ermittlungsverfahren eingeleitet. (2) Die Staatsanwaltschaft ist die Herrin des Ermittlungsverfahrens und ist den Exekutivbehörden diesbezüglich in jeder Hinsicht weisungsbefugt. (3) Ziel des Ermittlungsverfahrens ist die Erhebung von Beweisen, die die Schuldhaftigkeit des Täters feststellen. (4) Eine Tat wird nur auf Verdacht verfolgt. (5) Ein Tatverdacht besteht, wenn es konkrete Anhaltspunkte gibt, die darauf hindeuten, dass eine Person eine Straftat begangen haben könnte. Dieser Verdacht basiert auf Indizien, Zeugenaussagen oder anderen Beweisen, die eine gewisse Plausibilität für die Beteiligung der Person an der Straftat anzeigen. (6) Ein dringender Tatverdacht liegt vor, wenn der Verdacht einer Straftat aufgrund von Indizien und Beweisen deutlich erhärtet ist. Es müssen stärkere Anhaltspunkte vorhanden sein, die die Tatbeteiligung der Person wahrscheinlich machen."
    },
    {
      "number": "§ 26",
      "title": "Frist zur Anklageerhebung und Verfahrensdurchführung",
      "chapter": {
        "number": "IV.",
        "title": "Strafverfolgung"
      },
      "text": "(1) Ermittlungsverfahren sind durch die Staatsanwaltschaft und die zuständigen Exekutivbehörden zügig und ohne künstliche Verzögerung zu führen. (2) Spätestens innerhalb von 14 Tagen nach Einleitung eines Ermittlungsverfahrens ist: a) entweder Anklage zu erheben, b) das Verfahren gemäß zu Überprüfen und einzustellen oder c) eine begründete Verlängerung beim Supreme Attorney oder der Leitung der Staatsanwaltschaft zu beantragen, die darüber entscheiden. (3) Eine Verlängerung nach Absatz 2 Buchstabe c ist nur zulässig, wenn: a) der Sachverhalt besonders komplex ist, b) wesentliche Beweismittel noch ausstehen, oder c) zwingende Gründe eine frühere Entscheidung unmöglich machen. (4) Ohne genehmigte Verlängerung darf ein Ermittlungsverfahren eine Dauer von 14 Tagen nicht überschreiten. (5) Wird die Frist nach Absatz 2 ohne rechtmäßige Verlängerung überschritten, ist das Verfahren unverzüglich einzustellen. (6) Nach Erhebung der Anklage ist durch die Richterschaft binnen 5 Tagen ein Termin zur Hauptverhandlung anzuberaumen. (7) Zwischen Anklageerhebung und Hauptverhandlung dürfen grundsätzlich nicht mehr als 14 Tage liegen, sofern keine besonderen Umstände entgegenstehen."
    },
    {
      "number": "§ 27",
      "title": "Durchsuchungen",
      "chapter": {
        "number": "IV.",
        "title": "Strafverfolgung"
      },
      "text": "(1) Nur auf richterlichen Durchsuchungsbeschluss dürfen Personen, Fahrzeuge, Wohnräume und sonstige Räume sowie Flächen unter freiem Himmel zum Zwecke der Beweismittelerhebung durchsucht werden. Personen dürfen zum Zwecke der Eigensicherung von Exekutivbeamten ohne richterlichen Beschluss durchsucht werden; eine richterliche Bestätigung im Nachgang ist hierfür nicht erforderlich. (2) Bei Gefahr im Verzuge entfällt die Notwendigkeit eines richterlichen Beschlusses. In diesem Falle darf ein Mitglied der Leitungsebene der Exekutivbehörden eine Durchsuchung anordnen. Die Durchsuchung wegen Gefahr im Verzuge ist zu dokumentieren, muss insbesondere die rechtliche Begründung des Vorliegens von Gefahr im Verzuge enthalten. (3) Für Durchsuchungen auf den Drogenrouten (Routenrazzia) bedarf es einer richterlichen oder der Genehmigung des Supreme Attorneys im Nachgang. (4) Rechtswidrig durchgeführte Durchsuchungen führen zur Nichtverwertbarkeit der aufgefundenen Beweismittel im Strafverfahren. Auf Antrag der Staatsanwaltschaft kann die Richterschaft solche Beweismittel dennoch zulassen, wenn ihre Verwertung im besonderen öffentlichen Interesse liegt. Dies ist insbesondere der Fall, wenn Straftaten gegen das Leben oder gegen den Homeland Security Act vorgeworfen werden."
    },
    {
      "number": "§ 28",
      "title": "Anforderungen an einen Durchsuchungsbeschluss",
      "chapter": {
        "number": "IV.",
        "title": "Strafverfolgung"
      },
      "text": "(1) Ein Durchsuchungsbeschluss oder die Genehmigung einer Routenrazzia setzt voraus, dass eine Durchsuchung der Wohnung, sonstiger Räume und Flächen unter freiem Himmel sowie von Personen und der ihnen gehörenden Sachen und Fahrzeuge vermuten lässt, dass die Durchsuchung zur Auffindung von Beweismitteln führen werde (Auffindeverdacht). (2) Der Durchsuchungsbeschluss muss die betroffene Person, den Ort, die Begründung der Durchsuchung (Absatz 1) und den zulässigen Zeitraum der Vollziehung des Beschlusses enthalten. Die Genehmigung der Routenrazzia muss lediglich den Ort, eine kurze Begründung und Beweisbilder enthalten, die aufzeigen, dass sich Personen oder Fahrzeuge auf der Route befinden. (3) Betroffenen ist eine Abschrift auszuhändigen. Der Beschluss gilt nur für die benannten Objekte und Personen. (4) Gegenstände, die bei einer Durchsuchung oder Routenrazzia aufgefunden werden und auf andere Straftaten hindeuten (Zufallsfunde), dürfen sichergestellt und verwertet werden."
    },
    {
      "number": "§ 29",
      "title": "Besondere Ermittlungshandlungen",
      "chapter": {
        "number": "IV.",
        "title": "Strafverfolgung"
      },
      "text": "Zum Zwecke der Beweismittelerhebung dürfen die Exekutivbehörden Observationen und verdeckte Ermittlungen durchführen. Auf richterlichen Beschluss oder mit Genehmigung des Supreme Attorney dürfen die Exekutivbehörden die Telekommunikation eines Ermittlungsziels abhören; dies setzt voraus, dass die Überwachung der Telekommunikation erforderlich ist, weil andere Ermittlungshandlungen nicht zur Aufklärung der Tat beitragen können und es um Vorwürfe schwerwiegender Straftaten geht."
    },
    {
      "number": "§ 30",
      "title": "Verhaftung und Verlesung der Rechte",
      "chapter": {
        "number": "IV.",
        "title": "Strafverfolgung"
      },
      "text": "(1) Hat eine Exekutivbehörde den dringenden Verdacht, dass jemand eine Straftat begangen hat, ist sie autorisiert, die betroffene Person zu verhaften. (2) Unter Verhaftung ist zu verstehen, dass die Person mit dem Hintergrund strafrechtlicher Verfolgung in Handschellen gelegt wird. (3) Ab dem Zeitpunkt der Verhaftung gilt die Person als Beschuldigter. Dem Beschuldigten sind nach der Verhaftung aber noch vor der Verbringung in eine Haftzelle die Rechte wie folgt zu verlesen: \"Sie haben das Recht zu schweigen. Alles was Sie sagen kann und wir vor Gericht gegen Sie verwendet werden. Sie haben das Recht auf einen Anwalt. Falls Sie keinen Anwalt haben wird Ihnen, insofern einer verfügbar ist, gestellt.\". Bei unübersichtlichen Einsatzlagen kann die Verlesung der Rechte auch nach Verbringung in eine Zelle, spätestens jedoch 15 Minuten nach Verbringung in die Zelle, erfolgen. Die Unübersichtlichkeit der Einsatzlage ist im Zweifel durch die Exekutivbehörden nachzuweisen. (4) Ein Verstoß gegen die Belehrungspflicht führt, sofern der Verstoß wesentlich ist, zur Unverwertbarkeit von Aussagen, die vor der Belehrung seitens des Beschuldigten getroffen wurden und ist im Rahmen der Strafzumessung mildernd zu berücksichtigen."
    },
    {
      "number": "§ 31",
      "title": "Untersuchungshaft",
      "chapter": {
        "number": "IV.",
        "title": "Strafverfolgung"
      },
      "text": "(1) Die Untersuchungshaft kann zum Zwecke der Klärung des Sachverhalts und der intensiveren Beweismittelerhebung durch die Exekutivbehörden verhängt werden, wenn ein dringender Tatverdacht sowie Fluchtgefahr oder Verdunkelungsgefahr vorliegt. (2) Die Untersuchungshaft darf maximal 30 Minuten betragen. Sie kann auf Anordnung der Staatsanwaltschaft auf maximal 60 Minuten erhöht werden, wenn die Klärung des Sachverhaltes dies erfordert. (3) Wird ein Anwalt hinzugezogen, so ist der Ablauf der Untersuchungshaft bis zur finalen Einigung mit dem Rechtsanwalt gehemmt. (4) Die Richterschaft kann die Untersuchungshaft auf Antrag aufheben. Dem Antrag ist nur stattzugeben wenn: a) die Untersuchungshaft den Beschuldigten unverhältnismäßig in seinen Grundrechten verletzt, b) die Untersuchungshaft ohne Begründung und objektiv willkürlich verhängt wird oder c) die Untersuchungshaft für die weitere Abhandlung nicht zielführend ist, weil sich das Strafmaß durch eine Untersuchungshaft nicht maßgeblich verändert. Hebt die Richterschaft eine Untersuchungshaft auf, ist das Strafmaß entweder sofort zu verhängen oder der Beschuldigte ist mit der Auflage, sich regelmäßig bei der nächsten Polizeidienststelle zu melden, freizulassen. (5) Wird Untersuchungshaft rechtswidrig länger vollzogen oder hebt die Richterschaft diese mangels Anwesenheit eines Richters nicht auf, so kann im Nachgang auf Schadensersatz geklagt werden. (6) Untersuchungshaft kann durch einen Richter auf das Strafmaß einer Haft im Staatsgefängnis angerechnet werden."
    },
    {
      "number": "§ 33",
      "title": "Ordnungsgemäße Aktenführung durch Exekutivbeamte",
      "chapter": {
        "number": "V.",
        "title": "Aktenführung"
      },
      "text": "(1) Exekutivbeamte sind verpflichtet, über jeden relevanten Einsatz oder Vorfall eine vollständige, wahrheitsgemäße und nachvollziehbare Akte zu führen. (2) Die Akte hat alle wesentlichen Informationen zum Einsatz zu enthalten, insbesondere Angaben zu Zeit, Ort, beteiligten Beamten, dem Sachverhalt, den getroffenen Maßnahmen sowie zu beteiligten Personen, erhobenen Vorwürfen, sichergestellten Gegenständen und erfolgten Rechtsbelehrungen. Nicht zutreffende Punkte sind nicht aufzunehmen. (3) Bei Ordnungswidrigkeiten sind unabhängig von den Absätzen 1 und 2 nur die wesentlichen Angaben aktenkundig zu dokumentieren, insbesondere Zeit, Ort, beteiligte Beamte, betroffene Personen, die festgestellte Ordnungswidrigkeit sowie verhängte Sanktionen. Wird im gleichen oder einem anderen Zusammenhang eine Straftat festgestellt, gelten wieder die Absätze 1 und 2. (4) Für die Erstellung einer Akte haben Exekutivbeamte 48 Stunden Zeit. Versäumnisse können zur Beweiswürdigung oder Verfahrenseinstellung führen."
    },
    {
      "number": "§ 34",
      "title": "Bereinigung von wesentlichen Aktenfehlern",
      "chapter": {
        "number": "V.",
        "title": "Aktenführung"
      },
      "text": "(1) Fehlen wesentliche Informationen oder bestehen Widersprüche, kann das Verfahren auf richterliche Anordnung ausgesetzt werden, um die Mängel zu identifizieren und zu bereinigen oder, falls dies nicht möglich ist, das Verfahren in Gänze einzustellen. Währenddessen ruhen Strafvollzug und der Vollzug sonstiger Entscheidungen nach diesem Gesetz. (2) Die Entscheidung nach Absatz 1 Satz 1 ist innerhalb von 3 Tagen zu treffen."
    },
    {
      "number": "§ 35",
      "title": "Löschung von Akten",
      "chapter": {
        "number": "V.",
        "title": "Aktenführung"
      },
      "text": "Strafakten dürfen frühestens nach Ablauf von 60 Tagen nach der zugrundeliegenden Strafentscheidung gelöscht werden. Die Löschung erfolgt nur auf Antrag und wird ausschließlich durch den Chief Justice durchgeführt."
    },
    {
      "number": "§ 36",
      "title": "Anhörung bei Strafsanktionen durch die Exekutive",
      "chapter": {
        "number": "VI.",
        "title": "Rechte des Beschuldigten; Zeugen"
      },
      "text": "Der Beschuldigte ist vor der Verhängung einer Strafe anzuhören, wenn die Exekutivbehörden ein Strafe verhängen. Ihm ist dabei die Gelegenheit zu geben, sich zu den für die Entscheidung erheblichen Tatsachen zu äußern. Die Aussage des Beschuldigten hat in die Entscheidung über die Verhängung des Strafmaßes einzufließen."
    },
    {
      "number": "§ 37",
      "title": "Aussageverweigerungsrecht des Beschuldigten",
      "chapter": {
        "number": "VI.",
        "title": "Rechte des Beschuldigten; Zeugen"
      },
      "text": "(1) Der Beschuldigte hat das Recht, die Antwort auf solche Fragen zu verweigern, deren Antwort ihn selbst belasten würde. Wenn er dennoch Angaben zur Sache macht, ist er nicht zur Wahrheit verpflichtet. (2) Der Beschuldigte hat die Pflicht, Angaben zu seinen persönlichen Verhältnissen zu machen. Hierbei ist er zur wahrheitsgemäßen Aussage verpflichtet. (3) Aussagen, die unter Verletzung dieses Rechts zustande kommen, sind unverwertbar."
    },
    {
      "number": "§ 38",
      "title": "Recht auf Verteidiger",
      "chapter": {
        "number": "VI.",
        "title": "Rechte des Beschuldigten; Zeugen"
      },
      "text": "(1) Beschuldigte haben jederzeit das Recht, sich im Strafverfahren von einem zugelassenen Anwalt verteidigen zu lassen. Findet sich hierfür kein Anwalt auf freiwilliger Basis, kann ein zugelassener Anwalt auf richterliche Anordnung zur Verteidigung des Beschuldigten verpflichtet werden, wenn die vorgeworfenen Taten erheblich sind. (2) Die Anzahl der Strafverteidiger ist auf zwei begrenzt."
    },
    {
      "number": "§ 39",
      "title": "Zeugen und Zeugnisverweigerungsrecht",
      "chapter": {
        "number": "VI.",
        "title": "Rechte des Beschuldigten; Zeugen"
      },
      "text": "(1) Zeugen sind grundsätzlich zur wahrheitsgemäßen Aussage verpflichtet, wenn ihre Angaben zum Ermittlungserfolg beitragen. Sie können auf die Wahrheit vereidigt werden, um ihrer Aussage besonderes Gewicht zu verleihen. (2) Zeugen dürfen die Aussage verweigern, wenn sie sich selbst belasten würden. Zeugen dürfen darüber hinaus die Aussage auf Fragen verweigern, wenn a) sie mit dem Beschuldigten einer Straftat verheiratet oder in gerader Linie verwandt sind oder der Zeuge Bruder oder Schwester des Beschuldigten ist; b) sie im Rahmen eines anwaltlichen Mandatsverhältnisses zur Verschwiegenheit über die den Beschuldigten betreffenden Angelegenheiten verpflichtet wurde und der Zeuge von dem Beschuldigten nicht von dieser Verschwiegenheitspflicht entbunden wurde oder c) sie als Berufsgeheimnisträger zur Verschwiegenheit verpflichtet wurden und keine Aussagegenehmigung ihres Dienstherrn vorliegt. Das Recht aus Satz 1 Nummer 2 gilt auch nach Beendigung des Mandatsverhältnisses fort, betrifft dann aber nur Angelegenheiten, die während des Mandatsverhältnisses bekannt wurden. (3) Vor der Vernehmung sind Zeugen über die Wahrheitspflicht, die Strafbarkeit von uneidlicher Falschaussage und die mögliche Vereidigung auf die Wahrheit sowie die Strafbarkeit von Meineid zu belehren. (4) Zeugen sind grundsätzlich einzeln zu vernehmen."
    },
    {
      "number": "§ 40",
      "title": "Zeugenschutzprogramm",
      "chapter": {
        "number": "VI.",
        "title": "Rechte des Beschuldigten; Zeugen"
      },
      "text": "(1) Personen, die durch ihre Aussage erheblich gefährdet sind, können in ein Zeugenschutzprogramm aufgenommen werden. (2) Über die Aufnahme entscheiden das Department of Justice und Vertreter der Leitungen der Exekutive gemeinsam. (3) In dringenden Fällen genügt die vorläufige Zustimmung einer dieser Stellen; die andere ist unverzüglich nachträglich zu beteiligen. (4) Maßnahmen können Identitätsänderungen, Schutzunterbringung und Kommunikationssicherung umfassen. (5) Der Zeugenschutz endet mit richterlicher Bestätigung oder nach Ablauf der Maßnahme."
    },
    {
      "number": "§ 41",
      "title": "Einstellung von Verfahren durch die Staatsanwaltschaft",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Die Staatsanwaltschaft kann ein Strafverfahren einstellen, wenn kein ausreichender Tatverdacht besteht oder die Beweise nicht für eine Anklage ausreichen. (2) Die Staatsanwaltschaft kann ein Verfahren ebenfalls einstellen, wenn die Schuld als gering anzusehen ist oder kein öffentliches Interesse an der Strafverfolgung besteht. (3) Mit der Einstellung des Verfahrens gilt das Strafverfahren als endgültig beendet, sofern innerhalb von 7 Tagen nach Einstellung keine neuen Beweise auftauchen."
    },
    {
      "number": "§ 42",
      "title": "Außergerichtlicher Vergleich",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Ein außergerichtlicher Vergleich zwischen Staatsanwaltschaft und Beschuldigten ist zur Vereinfachung des Verfahrens oder für den Erfolg eines anderen Ermittlungsverfahrens jederzeit zulässig. Er bedarf richterlicher Billigung. Mit Billigung sind Berufung und Revision ausgeschlossen. (2) Vergleiche müssen die wesentlichen Tatsachen, Strafvorschläge und die Zustimmung des Beschuldigten schriftlich dokumentieren. (3) Ein ohne richterliche Billigung geschlossener Vergleich ist unwirksam."
    },
    {
      "number": "§ 43",
      "title": "Strafbefehlsverfahren",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Bei einfachen Straftaten kann die Staatsanwaltschaft beim zuständigen Gericht den Erlass eines Strafbefehls beantragen. Ein Strafbefehl darf ausschließlich Geldstrafen oder Haftstrafen bis zu 90 Hafteinheiten beinhalten. Die Richterschaft entscheidet binnen 3 Tagen über den Erlass eines Strafbefehls oder alternativ über die Eröffnung eines Hauptverfahrens. (2) Der Beschuldigte kann binnen 3 Tagen nach Entscheidung Einspruch gegen einen Strafbefehl erheben. Der Einspruch steht der Einlegung der Berufung oder Revision gleich. Für die Erhebung des Einspruchs gegen einen Strafbefehl besteht Anwaltszwang. Nach Ablauf der Frist kann kein Einspruch mehr erhoben werden."
    },
    {
      "number": "§ 44",
      "title": "Erhebung der Anklage",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Kommt die Staatsanwaltschaft im Zuge ihrer Ermittlungen zu dem Ergebnis, dass die Beweislage in ausreichendem Maße gegen einen Beschuldigten spricht und hat sie nicht den Erlass eines Strafbefehls beantragt, erhebt sie Anklage vor dem zuständigen Gericht. (2) Erhebt die Staatsanwaltschaft Klage vor Gericht, so hat sie eine Anklageschrift zu verfassen. Der Anklageschrift sind alle Beweismittel beizufügen. Anklageschrift und Beweismittel sind dem Gericht und dem Verteidiger des Beschuldigten oder, wenn ein Verteidiger nicht vorhanden ist, dem Beschuldigten selbst zugänglich zu machen."
    },
    {
      "number": "§ 45",
      "title": "Eröffnung der Hauptverhandlung",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Die Richterschaft beschließt auf Grundlage der Anklage die Eröffnung der Hauptverhandlung. Der Beschluss ist schriftlich abzufassen. Die Richterschaft kann auch bei einem Berufungs- oder Revisionsantrag eine Hauptverhandlung eröffnen. Die nachfolgenden Vorschriften gelten entsprechend. (2) Nach Eröffnung der Hauptverhandlung ist eine Einstellung des Verfahrens durch die Staatsanwaltschaft nicht mehr möglich."
    },
    {
      "number": "§ 46",
      "title": "Einstellung des Verfahrens durch das Gericht",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Das Gericht kann das Verfahren auf Antrag der Staatsanwaltschaft einstellen, wenn ein außergerichtlicher Vergleich geschlossen wurde oder wenn eine unzureichende Beweislage ein Hauptverfahren entbehrlich macht. (2) Fällt eine Änderung des Gesetzes mit der Erhebung einer Anklage zusammen und führt die Gesetzesänderung dazu, dass die Erhebung der Klage aufgrund von Nichtstrafbarkeit einer vorgeworfenen Tat nicht länger möglich ist, wird das Verfahren durch die Richterschaft eingestellt."
    },
    {
      "number": "§ 47",
      "title": "Vorverfahren",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Das Gericht entscheidet nach Erhebung der Anklage im Rahmen eines mündlichen Vorverfahrens über die Zulassung der Anklage. Im Vorverfahren werden Staatsanwaltschaft und Verteidigung angehört. Die Entscheidung über die Zulassung der Anklage bemisst sich an den Voraussetzungen für den Erlass eines Durchsuchungsbeschlusses. (2) Wird die Klage rechtskräftig abgewiesen, hat die Staatsanwaltschaft 7 Tage Zeit, neue Beweismittel vorzulegen, die eine Anklage in ausreichendem Maße stützen. Verstreicht diese Frist fruchtlos, ist das Ermittlungsverfahren endgültig einzustellen."
    },
    {
      "number": "§ 48",
      "title": "Bestimmung des Termins für die Hauptverhandlung; Vorladung des Beschuldigten; Öffentliche Zustellung",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Hat die Richterschaft die Eröffnung der Hauptverhandlung nach Zulassung der Anklage beschlossen, so bestimmt sie i einen Termin für die Hauptverhandlung. Im Anschluss ist der Beschuldigte durch das Gericht unverzüglich vorzuladen. (2) Zwischen der Bekanntgabe der Ladung an den Angeklagten und dem Beginn der Hauptverhandlung muss eine Frist von mindestens 3 Tagen liegen. (3) Eine Verkürzung dieser Frist ist nur zulässig, wenn: a) der Angeklagte und sein Verteidiger zustimmen (Verzichtserklärung) oder b) Gefahr im Verzug besteht und dies vom Richter ausführlich begründet wird. (4) Die Ladung zur Hauptverhandlung ist dem Angeklagten persönlich oder dessen Verteidiger bekanntzugeben. Die Ladung gilt als bekanntgegeben, wenn der Angeklagte oder sein Verteidiger von deren Inhalt Kenntnis erlangt haben. Ist kein Verteidiger bestellt worden und der Angeklagte unbekannten Aufenthaltes, kann die Ladung öffentlich bekanntgegeben werden. In diesem Fall wird für die Dauer von einer Woche auf der Website des DOJ eine Mitteilung veröffentlicht, die zum Gegenstand hat: Name des Angeklagten, Art des Dokuments, Aktenzeichen und Datum des Dokuments. Nach Ablauf der Woche gilt die Ladung abweichend von Satz 2 als bekanntgegeben. (5) Findet die Verhandlung statt, ohne dass die Frist von 3 Tagen gewahrt wurde oder eine ordnungsgemäße Bekanntgabe der Ladung erfolgte, ist das Verfahren auf Antrag der Verteidigung auszusetzen. Bereits ergangene Versäumnisurteile sind in diesem Fall nichtig."
    },
    {
      "number": "§ 49",
      "title": "Vorladung von Zeugen",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Zeugen der Anklage sind durch die Staatsanwaltschaft vorzuladen. Zeugen der Verteidigung sind durch den zuständigen Strafverteidiger vorzuladen. (2) Vorladungen von Gericht, Staatsanwaltschaft und Verteidigung ist Folge zu leisten. (3) § 48 Absatz 2 bis 4 ist entsprechend anzuwenden."
    },
    {
      "number": "§ 50",
      "title": "Vorführungsbefehl",
      "chapter": {
        "number": "VII.",
        "title": "Strafprozess"
      },
      "text": "(1) Erscheinen der Beschuldigte oder geladene Zeugen unentschuldigt nicht zu einer terminierten Verhandlung oder einem staatsanwaltschaftlich angeordneten Verhör, können das Gericht oder die Staatsanwaltschaft einen Vorführungsbefehl zur zwangsweisen Vorführung der Person erlassen. Der Vorführungsbefehl wird durch die Exekutivbehörden vollzogen. (2) Ein Vorführungsbefehl kann auch erlassen werden, wenn die Richterschaft einen sonstigen Rechtsstreit nur im Beisein der betroffenen Personen klären kann. (3) Ein Vorführungsbefehl kann auch für sonstige Zwecke erlassen werden, die der Sicherung des Strafverfahrens dienen."
    },
    {
      "number": "§ 50",
      "title": "Ablehnung eines Richters wegen Besorgnis der Befangenheit",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Richter können bei Besorgnis der Befangenheit abgelehnt werden. Über den Antrag entscheidet ein unbeteiligter Richter. Bei personellen Engpässen innerhalb der Richterschaft gilt ein Befangenheitsantrag als abgelehnt. (2) Befangenheit kann insbesondere vorliegen, wenn persönliche Beziehungen oder wirtschaftliche Interessen bestehen."
    },
    {
      "number": "§ 51",
      "title": "Ausschluss von Verteidigern wegen Beteiligung",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "Ein Strafverteidiger kann auf Antrag vom Verfahren ausgeschlossen werden, wenn er selbst an der Tat beteiligt ist. Über den Antrag entscheidet die Richterschaft."
    },
    {
      "number": "§ 52",
      "title": "Nebenklage",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "Tatopfer erhalten das Recht, dem Verfahren als Nebenkläger mit eigenem Anwaltsbeistand beizutreten."
    },
    {
      "number": "§ 53",
      "title": "Ununterbrochene Gegenwart",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Während der Hauptverhandlung haben die Prozessbeteiligten ununterbrochen anwesend zu sein. (2) Kann die Anwesenheit eines Beteiligten nicht ermöglicht werden, liegt die Fortführung der Verhandlung im Ermessen der Richterschaft. (3) Absatz 2 gilt nicht für den Angeklagten."
    },
    {
      "number": "§ 54",
      "title": "Anwesenheitspflicht des Angeklagten; Verfahren bei Abwesenheit von Zeugen oder dem Angeklagten",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Der Angeklagte hat zur Hauptverhandlung anwesend zu sein. (2) Ist die Abwesenheit durch gesundheitliche Gründe bedingt, wird die Hauptverhandlung bis zur Genesung des Angeklagten ausgesetzt. (3) Ist ein vorgeladener Zeuge abwesend und konnte auch mittels Vorführungsbefehl nicht beigetrieben werden, kann die Verhandlung ohne diesen stattfinden oder auf Antrag vertagt werden. (4) Ist der Angeklagte abwesend, wird die Verhandlung grundsätzlich ausgesetzt, bis der Angeklagte der Richterschaft vorgeführt werden kann. (5) Von Absatz 4 kann abgewichen werden wenn a) eine Verurteilung aus Gründen der nationalen Sicherheit erforderlich ist oder b) wenn der Angeklagte sich bewusst und dauerhaft dem Verfahren entzieht und seine Anwesenheit trotz zumutbarer Maßnahmen nicht hergestellt werden kann. Die Entscheidung nach Satz 1 trifft ausschließlich die Richterschaft."
    },
    {
      "number": "§ 55",
      "title": "Aussetzung und Unterbrechung",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Erachtet die Richterschaft es für notwendig, kann die Verhandlung ausgesetzt und zu einem späteren Zeitpunkt fortgeführt werden. (2) Die Sitzung kann durch die Richterschaft für eine kurze Dauer pausiert werden (Unterbrechung)."
    },
    {
      "number": "§ 56",
      "title": "Öffentlichkeit",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Hauptverhandlungen sind grundsätzlich öffentlich. (2) Auf Antrag oder von Amts wegen kann die Öffentlichkeit ausgeschlossen werden, wenn Persönlichkeitsrechte, Sicherheitsinteressen oder die Ermittlungen dies erfordern. Die Entscheidung darüber trifft die Richterschaft."
    },
    {
      "number": "§ 57",
      "title": "Gang der Hauptverhandlung",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Die Hauptverhandlung hat folgenden Gang: Die Richterschaft eröffnet offiziell die Verhandlung indem der Fall, das Aktenzeichen des Falls und die gegeneinander antretenden Parteien genannt werden, Der Vorsitzende stellt die Anwesenheit der Prozessbeteiligten fest, Der Vorsitzende erteilt der Staatsanwaltschaft zur Verlesung der Anklageschrift das Wort, Der Vorsitzende erteilt das Wort dem Angeklagten, der die Gelegenheit erhält, sich zur Sache zu äußern, Die Prozessbeteiligten erhalten die Gelegenheit, Anträge einzureichen, Der Vorsitzende eröffnet die Beweisaufnahme, Es werden nacheinander die angemeldeten Zeugen aufgerufen; die Richterschaft nimmt die Personalien der Zeugen für das Protokoll auf, Die Zeugen werden über Ihre Wahrheitspflicht und das Zeugnisverweigerungsrecht belehrt, Ggf. Feststellung eines Sachverständigen als Zeugen durch die Richterschaft, Die Zeugen werden durch die Prozessbeteiligten befragt, Der Angeklagte wird durch die Prozessbeteiligten befragt, Ggf. werden weitere Beweismittel präsentiert, Der Vorsitzende beendet die Beweisaufnahme, Die Staatsanwaltschaft trägt ihr Schlussplädoyer vor, Die Verteidigung beziehungsweise der Angeklagte trägt ihr Schlussplädoyer vor, Die Richterschaft zieht sich zur Urteilsfindung zurück und unterbricht hierfür die Sitzung, das Urteil wird verkündet; alle Anwesenden müssen sich erheben, das Urteil wird begründet; alle Anwesenden müssen sich setzen, Die Verhandlung wird geschlossen. Wird die Reihenfolge aus Satz 1 geringfügig nicht eingehalten, stellt dies keinen Verfahrensfehler dar."
    },
    {
      "number": "§ 58",
      "title": "Einsprüche gegen Beweismittel",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Gegen Fragen der Prozessbeteiligten (ausgenommen Richterschaft), Zeugenaussagen, Aussagen des Angeklagten oder die Präsentation von bestimmten Beweismitteln kann Einspruch erhoben werden. Folgende Einsprüche sind vor Gericht zulässig: a) Gegenstandslos (Nicht von Bedeutung für die Verhandlung) b) Illegal beschafft (Beweismittel, das nicht auf legalem Wege beschafft wurde oder gefälscht ist) c) Unvollständig (Beweismittel nicht in Gänze vorliegend) d) Abschweifung (Der Zeuge schweift ab und antwortet nicht kurz und knapp auf die Frage, die ihm gestellt wurde. Irrelevante Informationen werden mitgeteilt.) e) Hörensagen (Der Zeuge tätigt eine Aussage, die er über Dritte erhalten hat und nicht selbst verifizieren kann) f) Vermutung g) Zeugeneinschüchterung (durch Zeugen oder Befrager) h) Mehrdeutig / Irreführend (die Frage ist nicht eindeutig genug) i) Gesetz erklärend (der Staatsanwalt/der Verteidiger stellt eine Frage, wo der Gesetzestext ausgelegt wird) j) Aufruf zur Spekulation (die Frage fordert den Zeugen auf, unpräzise zu Antworten und eigene Schlüsse zu ziehen) k) Doppelfrage (mehrere Fragen werden auf einmal gestellt) l) Fehlende Kompetenz (nur bei Sachverständigen-Befragung; ein Sachverständiger wird zu einem ihm fremden Fachgebiet- oder auf einem zu hohen Niveau seines eigenen Fachgebietes befragt) m) Irrelevant (Die Frage ist für die Tatsachenfeststellung nicht von Bedeutung) n) Suggestivfrage (Frage, die so gestellt ist, dass eine bestimmte Antwort in gewisser Hinsicht “vorformuliert” wird) Weitere Einsprüche, die in der in Satz 2 aufgeführten Liste nicht vorkommen, können zulässig sein. (2) Wird seitens der Prozessbeteiligten Einspruch erhoben, entscheidet die Richterschaft über die Zulässigkeit. (3) Eine unzulässige Frage darf nicht weiter gestellt werden. Auf eine unzulässige Frage muss nicht geantwortet werden. Die Antwort auf eine unzulässige Frage darf nicht in die Urteilsfindung einfließen."
    },
    {
      "number": "§ 59",
      "title": "Schlussplädoyers; Recht des letzten Wortes",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Die Prozessbeteiligten (Staatsanwaltschaft und Verteidigung) haben das Recht, Schlussplädoyers zu halten. (2) Der Angeklagte hat das Recht des letzten Wortes."
    },
    {
      "number": "§ 60",
      "title": "Urteil",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Im Rahmen der Urteilsfindung sondiert das Gericht die Beweislage und die Argumentation der übrigen Prozessbeteiligten und findet nach pflichtgemäßem Ermessen ein Urteil. (2) Unbestimmte Rechtsbegriffe werden im Rahmen der Urteilsfindung durch die Richterschaft ausgelegt. Die Auslegung hat dabei verfassungskonform zu erfolgen. (3) Das Urteil wird im Namen des Volkes verkündet und muss schriftlich abgefasst werden. Im Anschluss an die Hauptverhandlung ist das Urteil zu veröffentlichen."
    },
    {
      "number": "§ 63",
      "title": "Berufung und Revision",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Gegen erstinstanzliche Entscheidungen in Strafsachen stehen ausschließlich die Rechtsmittel der Berufung und der Revision offen. Rechtsmittel müssen binnen zwei Tagen nach Bekanntgabe der Erstentscheidung schriftlich eingelegt werden. Über die Zulassung der Rechtsmittel entscheidet die Richterschaft. Im Grundsatz muss erst Berufung eingelegt werden, bevor Revision eingelegt werden kann. (2) Im Rahmen von Berufungsverhandlungen werden neue Tatsachen und Beweise geprüft, wenn sie ohne grobe Nachlässigkeit zuvor nicht vorgebracht werden konnten. (3) Im Rahmen von Revisionsverhandlungen werden allein Rechtsfehler geprüft. Maßgeblich sind Verfahrensrecht und richtige Anwendung des materiellen Rechts. (4) Für Berufung und Revision besteht Anwaltszwang. (5) Wird eine Entscheidung nur wegen Rechtsfehlern angefochten, wird dies als Sprungrevision gewertet. Im Falle einer Sprungrevision wird die Berufung übersprungen. Das Revisionsurteil ist in diesem Fall endgültig und eine Berufung im Nachgang ausgeschlossen."
    },
    {
      "number": "§ 64",
      "title": "Bewährungsstrafe",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Richter können Strafen im Rahmen einer Hauptverhandlung oder der Entscheidung über Berufung oder Revision zur Bewährung aussetzen. (2) Eine Aussetzung zur Bewährung kann entschieden werden, wenn zu erwarten ist, dass der Verurteilte sich schon die Verurteilung zur Warnung dienen lassen und künftig auch ohne die Einwirkung des Strafvollzugs keine Straftaten mehr begehen wird. Dabei sind namentlich die Persönlichkeit des Verurteilten, sein Vorleben, die Umstände seiner Tat, sein Verhalten nach der Tat, seine Lebensverhältnisse und die Wirkungen zu berücksichtigen, die von der Aussetzung für ihn zu erwarten sind."
    },
    {
      "number": "§ 65",
      "title": "Strafarten und Umwandlungsrechner",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Mögliche Strafarten sind Geldstrafe, Freiheitsstrafe, Sozialstunden, verbindliche Gutachten, Lizenzentzug, Empfehlungen für disziplinarische Maßnahmen im öffentlichen Dienst. (2) Umrechnung: - 1 Hafteinheit entspricht 2.500 Dollar; - 7 Sozialstunden entsprechen 2.500 Dollar; - 1 Hafteinheit entspricht 7 Sozialstunden; (3) Eine Umwandlung ist zulässig, sofern: a) keine besondere Schwere der Tat vorliegt, b) keine Gefährdung der öffentlichen Sicherheit zu erwarten ist, c) und keine Wiederholungsgefahr besteht. (4) Eine Umwandlung von Geldstrafe in Haft ist zulässig, wenn die Geldstrafe nicht innerhalb der gesetzten Frist beglichen wird. Die Entscheidung über Umwandlung trifft das zuständige Gericht oder Behörde nach pflichtmäßigem Ermessen. (5) Freiheitsstrafen ab 60 Hafteinheiten werden im Staatsgefängnis vollstreckt. Ausnahmen sind durch die Staatsanwaltschaft zu erlassen."
    },
    {
      "number": "§ 66",
      "title": "Umgang mit Verfahrensfehlern",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "Bei Verfahrensfehlern nach diesem Gesetz entsteht dem Geschädigten ein Anspruch auf Schadensersatz. Die Höhe richtet sich nach der Schwere des Schadens. Der Anspruch muss gerichtlich geltend gemacht werden. Für dieses Verfahren besteht Anwaltszwang."
    },
    {
      "number": "§ 67",
      "title": "Schmerzensgeld",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "Opfer können beim zuständigen Gericht Schmerzensgeld beantragen, wenn Sie als Nebenkläger am Verfahren teilnehmen. Die Höhe richtet sich nach der Schwere des erlittenen Schadens durch die Tat. § 24 des Zivilgesetzbuches ist anzuwenden."
    },
    {
      "number": "§ 68",
      "title": "Auflagen",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "Das Gericht kann zusätzlich zu einem Strafurteil Auflagen erteilen. Zulässig sind Schadenswiedergutmachung, Zahlungen an gemeinnützige Einrichtungen, gemeinnützige Leistungen und ärztliche Gutachten. Auflagen dürfen nicht unzumutbar sein."
    },
    {
      "number": "§ 70",
      "title": "Aufhebung ärztlicher Schweigepflicht im Strafverfahren; Blutproben zur Beweissicherung",
      "chapter": {
        "number": "VIII.",
        "title": "Hauptverhandlung, Rechtsmittel und Strafarten"
      },
      "text": "(1) Ärzte werden grundsätzlich nur auf Freigabe des betreffenden Patienten von ihrer Schweigepflicht entbunden. (2) Ergebnisse von Untersuchungen, die im Rahmen von Strafverfahren gerichtlich angeordnet wurden, dürfen von der Ärzteschaft an den zuständigen Richter übermittelt werden. (3) Das LSMD ist auf Anordnung der Exekutivbehörden berechtigt, zur Beweissicherung Blutproben von Personen zu entnehmen, sofern dies für ein laufendes oder einzuleitendes Verfahren erforderlich ist. Eine vorherige Abstimmung mit dem Department of Justice ist nicht erforderlich. Die Entnahme kann auch gegen den Willen der betroffenen Person, auf richterliche Anordnung oder bei Gefahr im Verzug durchgeführt werden. Die Ergebnisse der Blutuntersuchung dürfen als Beweis auch ohne Schweigepflichtsentbindung verwertet werden."
    },
    {
      "number": "§ 71",
      "title": "Haftanstalt und persönliche Habe",
      "chapter": {
        "number": "IX.",
        "title": "Strafvollstreckung"
      },
      "text": "(1) Haftanstalten sind Untersuchungshaftzellen und das Staatsgefängnis. (2) Nicht tatbezogene Gegenstände (persönliche Habe) sind nach Haftende herauszugeben."
    },
    {
      "number": "§ 72",
      "title": "Strafvollzug von hohen Haftstrafen",
      "chapter": {
        "number": "IX.",
        "title": "Strafvollstreckung"
      },
      "text": "(1) Bei verhängten Strafen ab einer Gesamthaftdauer von 60 Hafteinheiten oder mehr, und sofern keine unmittelbare Gefahr für die öffentliche Sicherheit oder Ordnung ausgeht, tritt die Haftstrafe nicht unmittelbar in Vollzug. (2) Der Verurteilte wird stattdessen unter gerichtlicher Aufsicht auf Bewährung entlassen, bis der festgesetzte Haftantritt erfolgt (Haftaufschub). (3) Der Verurteilte hat sich zu festgelegten Terminen bei der zuständigen Exekutivbehörde einzufinden."
    },
    {
      "number": "§ 73",
      "title": "Verfahren bei Nichterscheinen zum Haftantritt",
      "chapter": {
        "number": "IX.",
        "title": "Strafvollstreckung"
      },
      "text": "(1) Erscheint der Verurteilte nicht zu einem festgesetzten Haftantrittstermin, wird unverzüglich ein Haftbefehl gegen ihn erlassen. (2) In diesem Fall wird die bestehende Haftstrafe um 25 % erhöht, mindestens jedoch um 20 Hafteinheiten, um den Fluchtversuch strafrechtlich zu sanktionieren. (3) Wird der Verurteilte erneut beim Haftantrittstermin nicht angetroffen, kann die Strafe vollständig ohne weiteres Verfahren vollstreckt werden."
    },
    {
      "number": "§ 74",
      "title": "Neue Straftaten während des Haftaufschubs",
      "chapter": {
        "number": "IX.",
        "title": "Strafvollstreckung"
      },
      "text": "(1) Begeht die Person während des Haftaufschubs oder der Bewährungszeit weitere Straftaten, werden diese unabhängig von der bestehenden Strafe geahndet und zu den bestehenden Haftzeiten addiert. (2) Eine Verrechnung oder Zusammenlegung der Strafen findet in diesen Fällen nicht statt."
    },
    {
      "number": "§ 75",
      "title": "Zweck und Anwendung des Haftaufschubes",
      "chapter": {
        "number": "IX.",
        "title": "Strafvollstreckung"
      },
      "text": "(1) Der Haftaufschub dient der Verfahrenssicherung, Nachbearbeitung und Revisionszeit für das Department of Justice (DOJ). (2) Die Zeit bis zum Haftantritt kann vom Betroffenen genutzt werden, um: a) eine Revision oder Berufung einzureichen, b) anwaltliche oder private Angelegenheiten zu klären, c) ein persönliches Übergabeprotokoll vorzubereiten. (3) Wird durch das DOJ Rechtsmittel zugelassen, ruht die Haft bis zur endgültigen Entscheidung."
    },
    {
      "number": "§ 76",
      "title": "Richterlicher Haftbefehl bei Fahndung wegen Haftvollstreckung",
      "chapter": {
        "number": "IX.",
        "title": "Strafvollstreckung"
      },
      "text": "(1) Eine Fahndung zur Festnahme einer Person zum Zweck des Vollzugs einer Freiheitsstrafe oder offener Hafteinheiten ist nur zulässig, wenn ein richterlicher Haftbefehl vorliegt, der durch das Department of Justice erlassen oder bestätigt wurde. (2) Die Aufnahme einer Person in Fahndungslisten setzt die vorherige Ausstellung eines solchen Haftbefehls voraus. (3) Ausgenommen hiervon sind ausschließlich Fälle unmittelbarer Gefahr im Verzug, in denen eine vorläufige Festnahme erforderlich ist; der richterliche Haftbefehl ist unverzüglich nachzuholen. (4) Ohne richterlichen Haftbefehl darf eine Person nicht festgenommen oder verfolgt werden, sofern der Zweck der Maßnahme ausschließlich im Vollzug bereits verhängter Hafteinheiten liegt."
    },
    {
      "number": "§ 77",
      "title": "Zuständigkeit Staatsgefängnis",
      "chapter": {
        "number": "IX.",
        "title": "Strafvollstreckung"
      },
      "text": "Exekutivbehörden verantworten Transport, Aufnahme, Sicherheit und Wohlergehen der Inhaftierten."
    },
    {
      "number": "§ 78",
      "title": "Zwingendes Gerichtsverfahren bei bestimmten Straftaten; Schnellverfahren",
      "chapter": {
        "number": "X.",
        "title": "Sonstige Regelungen"
      },
      "text": "(1) Verfahren, die sich auf die in Art. 8 Abs. 4 sowie Art. 9 Abs. 1 der Verfassung genannten Tatbestände beziehen, ebenso wie auf die Straftatbestände gemäß §§ 15–24 des ATG sowie die §§ 40, 44, 45, 49 und 50 des StGB, sind zwingend vor einem zuständigen Gericht zu verhandeln. (2) Zur Klärung von Rechtsfragen können durch einen Richter Schnellverfahren mit mündlicher Verhandlung angesetzt werden. Für diese Verfahren gelten die übrigen Regelungen zu Hauptverfahren entsprechend."
    },
    {
      "number": "§ 79",
      "title": "Vorläufige Festnahme durch Jedermann",
      "chapter": {
        "number": "X.",
        "title": "Sonstige Regelungen"
      },
      "text": "(1) Jedermann darf bei Ertappung auf frischer Tat und Fluchtverdacht oder ungeklärter Identität vorläufig festnehmen. (2) Bei Antragsdelikten ist dies zulässig, auch wenn ein Antrag noch nicht gestellt wurde. Die Exekutivbehörden sind unverzüglich zu informieren."
    },
    {
      "number": "§ 80",
      "title": "Missachtung des Gerichts",
      "chapter": {
        "number": "X.",
        "title": "Sonstige Regelungen"
      },
      "text": "(1) Wer während eines Strafverfahrens eine vom Gericht erlassene Anordnung vorsätzlich nicht befolgt oder den ordnungsgemäßen Ablauf des Verfahrens beeinträchtigt, kann vom zuständigen Gericht wegen Missachtung des Gerichts mit geeigneten Maßnahmen belegt werden. (2) Missachtung liegt insbesondere vor, wenn eine Person einer gerichtlichen Ladung schuldhaft nicht nachkommt, eine gerichtlich angeordnete Handlung verweigert oder deren Vollzug verhindert, eine gerichtliche Unterlassungsanordnung verletzt, eine Gerichtsverhandlung nachhaltig stört oder sich in einer Weise verhält, die die Autorität des Gerichts beeinträchtigt. (3) Die Art und das Maß der Maßnahmen bestimmt das Gericht nach pflichtgemäßem Ermessen. Dabei berücksichtigt es insbesondere die Bedeutung der missachteten Anordnung, den Grad des Verschuldens sowie die Auswirkungen auf das Verfahren. (4) Vor der Anordnung von Maßnahmen ist der betroffenen Person Gelegenheit zur Äußerung zu geben, es sei denn, die Missachtung erfolgt unmittelbar in der Sitzung und erfordert ein sofortiges Einschreiten des Vorsitzenden. (5) Gegen Entscheidungen nach diesem Paragraphen ist die sofortige Beschwerde zulässig, diese muss von einem unabhängigen Richter geprüft werden."
    },
    {
      "number": "§ 81",
      "title": "Dienstrechtliche Empfehlungen und Maßnahmen",
      "chapter": {
        "number": "X.",
        "title": "Sonstige Regelungen"
      },
      "text": "(1) Die Staatsanwaltschaft ist befugt, im Rahmen eines gerichtlichen oder dienstrechtlich relevanten Verfahrens gegenüber Personen im öffentlichen Dienst Empfehlungen zu dienstrechtlichen Maßnahmen auszusprechen. Diese Empfehlungen können insbesondere umfassen: a) die Entlassung aus dem Staatsdienst, b) die vorübergehende Suspendierung vom Dienst, c) die Degradierung innerhalb der jeweiligen Behörde. (2) Die ausgesprochenen Empfehlungen entfalten keine unmittelbare Rechtswirkung. Die Entscheidung über deren Umsetzung obliegt ausschließlich der zuständigen Beschäftigungsbehörde. (3) Die zuständige Behörde ist verpflichtet, die Empfehlung zu prüfen und unter Berücksichtigung der geltenden dienstrechtlichen Vorschriften eigenständig zu entscheiden und Ihre entscheidung mittels einem Dokument zu dokumentieren und vorzulegen. (4) In Fällen schwerwiegender Rechtsverstöße kann die Staatsanwaltschaft gerichtliche Maßnahmen beantragen. Die Anordnung und Durchsetzung entsprechender Maßnahmen erfolgt ausschließlich durch ein zuständiges Gericht im Rahmen der geltenden gesetzlichen Bestimmungen."
    }
  ]
},
{
  "id": "airtraffic",
  "title": "AVIATION AND AIR TRAFFIC CODE",
  "category": "Gesetzbuch",
  "sourceFile": "S.A. STATE GOVERNMENT - Air Traffic Code.html",
  "sections": [
    {
      "number": "§ 1.",
      "title": "Allgemeine Vorschriften",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Dieses Gesetz regelt den Betrieb, die Nutzung und den Verkehr von Luftfahrzeugen im Staatsgebiet San Andreas, einschließlich der Sicherheit, Zulassung, Haftung und Aufsicht. (2) Ziel dieses Gesetzes ist die Gewährleistung eines sicheren, geordneten und umweltverträglichen Luftverkehrs. (3) Jeder Teilnehmer am Luftverkehr hat sich so zu verhalten, dass kein anderer geschädigt, gefährdet oder mehr als unvermeidbar behindert oder belästigt wird. (4) Die Vorschriften dieses Gesetzes gelten für alle zivilen Luftfahrzeuge sowie für staatliche Luftfahrzeuge, soweit keine Sonderregelung besteht."
    },
    {
      "number": "§ 2.",
      "title": "Luftfahrzeuge",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Luftfahrzeuge im Sinne dieses Gesetzes sind: Flugzeuge (starre Tragflächen, durch Motorantrieb gesteuert), Helikopter (rotierendes Tragflächensystem, senkrecht start- und landefähig), Drohnen und unbemannte Luftfahrzeuge (UAVs), sofern sie für Transport-, Überwachungs- oder Freizeitflüge genutzt werden. (2) Luftfahrzeuge dürfen nur betrieben werden, wenn sie technisch zugelassen, flugtauglich und registriert sind. (3) Der Betrieb von militärischen oder bewaffneten Luftfahrzeugen ist ausschließlich staatlichen Institutionen und Behörden vorbehalten. (4) Nicht zugelassene oder verbotene Luftfahrzeuge sind militärische oder bewaffnete Luftfahrzeuge sowie sowie Luftfahrzeuge ohne behördliche Zulassung oder Betriebserlaubnis. (5) Der Besitz oder Betrieb solcher Luftfahrzeuge durch Zivilpersonen ist verboten und wird als Straftat behandelt."
    },
    {
      "number": "§ 3.",
      "title": "Flugplätze",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Öffentlich zugelassene Flugplätze sind: Los Santos International Airport (LSIA), Sandy Shores Airfield, Grapeseed Airfield, Roxwood Airport. (2) Diese dürfen ohne besondere Genehmigung für Start und Landung genutzt werden, sofern keine betrieblichen oder sicherheitsrechtlichen Einschränkungen bestehen und der Flug ordnungsgemäß angemeldet wurde. (3) Flugplätze sind jederzeit in einem sicheren, betriebsfähigen Zustand zu halten. Hindernisse oder Beschädigungen sind unverzüglich der Exekutivbehörde zu melden."
    },
    {
      "number": "§ 4.",
      "title": "Eingeschränkte Landung und Start",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Das Starten und Landen außerhalb zugelassener Flugplätze bedarf der Zustimmung des Grundstückseigentümers; zusätzlich ist eine schriftliche Genehmigung des Department of Justice erforderlich. (2) Für Landungen in Naturschutzgebieten, Innenstädten oder über bewohnten Zonen gilt ein generelles Verbot, es sei denn, es handelt sich um Einsatzflüge staatlicher Stellen oder um Notfälle."
    },
    {
      "number": "§ 5.",
      "title": "Regelungen beim Fliegen",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Die Mindestflughöhe beträgt: 1200 Fuß (≈ 360 Meter) über bewohnten Gebieten, 800 Fuß (≈ 240 Meter) über unbewohntem Gebiet. (2) Über Menschenmengen, Einsatzorten oder laufenden Veranstaltungen ist das Überfliegen grundsätzlich untersagt. Flugverbotszonen gehen den allgemeinen Flughöhenregelungen vor."
    },
    {
      "number": "§ 6.",
      "title": "Flugveranstaltungen",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Flugveranstaltungen, Wettbewerbe oder öffentliche Vorführungen müssen mindestens 48 Stunden vor Beginn beim Department of Justice schriftlich angezeigt werden. Die Durchführung bedarf einer Genehmigung, die erteilt werden kann, sofern keine Gefährdung der öffentlichen Sicherheit oder des Luftverkehrs zu erwarten ist. (2) Die örtlich zuständige Exekutivbehörde ist ebenfalls 48 Stunden vor Beginn zu informieren. (3) Der Veranstalter trägt die volle Verantwortung für die Sicherheit der Teilnehmer, Zuschauer und des Luftraums."
    },
    {
      "number": "§ 7.",
      "title": "Notlandungen",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Im Falle technischer Defekte, Witterungseinflüsse oder menschlichen Versagens darf von § 4–6 abgewichen werden, wenn dies zur Gefahrenabwehr erforderlich ist. (2) Die örtlichen Behörden müssen vor oder unmittelbar nach der Notlandung informiert werden. (3) Eine Notlandung ist jede ungeplante, sicherheitsbedingte Landung zur Vermeidung einer unmittelbaren Gefahr für Menschen, Luftfahrzeuge oder Eigentum."
    },
    {
      "number": "§ 8.",
      "title": "Rauschmittel und Flugtauglichkeit",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Piloten dürfen keine Luftfahrzeuge führen, wenn sie unter dem Einfluss von Alkohol, Betäubungsmitteln oder Medikamenten stehen, die ihre Flugtauglichkeit beeinträchtigen. (2) Ein Verstoß gilt als schwerwiegender Eingriff in die Flugsicherheit und kann zum sofortigen Entzug des Flugscheins führen."
    },
    {
      "number": "§ 9.",
      "title": "Gefährdung des Luftverkehrs",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Wer durch Handlungen oder Unterlassungen den Luftverkehr gefährdet, insbesondere: a) den sicheren Betrieb stört, b) Fluggeräte unbefugt betritt oder manipuliert, c) durch Laser, Drohnen oder andere Geräte Piloten blendet oder behindert, macht sich eines gefährlichen Eingriffs in den Luftverkehr schuldig. (2) Diese Tat wird gemäß den Strafvorschriften des Strafgesetzbuchs geahndet."
    },
    {
      "number": "§ 10.",
      "title": "Haftung",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Der Pilot trägt die primäre Verantwortung für den sicheren Betrieb, die Wartung und den technischen Zustand des Luftfahrzeugs. (2) Verstößt der Pilot gegen dieses Gesetz oder verursacht durch Fahrlässigkeit einen Unfall, haftet er persönlich für alle daraus entstehenden Schäden, sofern kein Fremdverschulden nachgewiesen wird."
    },
    {
      "number": "§ 11.",
      "title": "Flugverbot",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Exekutivbehörden können ein temporäres oder dauerhaftes Flugverbot verhängen, wenn: gegen Vorschriften dieses Gesetzes verstoßen wurde, der Pilot als fluguntauglich gilt, Sicherheitsbedenken gegen das Luftfahrzeug bestehen. (2) Während eines Flugverbots darf die betroffene Person kein Luftfahrzeug führen oder betreiben."
    },
    {
      "number": "§ 12.",
      "title": "Abstellen von Luftfahrzeugen",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Luftfahrzeuge dürfen nur auf zugelassenen Flugplätzen (§ 3) oder genehmigten privaten Flächen im Sinne des § 4 abgestellt werden. (2) Das Abstellen auf öffentlichen Straßen, in Städten, Parks oder nicht genehmigten Flächen ist verboten. (3) Unzulässig abgestellte Luftfahrzeuge können durch autorisierte Abschleppunternehmen oder die Exekutive entfernt oder sichergestellt werden."
    },
    {
      "number": "§ 13.",
      "title": "Flugverbotszonen",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Folgende Gebiete gelten als Flugverbotszonen im Umkreis von 250 Metern: Bereich um das Department of Justice (Rockford Hills), Bereich um das Los Santos Medical Department (Downtown - Pillbox Hill), Bereich um das Los Santos Fire Department (Vespucci), Bereich um das LSPD-Hauptquartier (Vespucci Canals), Bereich um das Highway Patrol-Gebäude (Route 13 Abschnitt B), Bereich um das Highway Patrol-Gebäude (La Mesa, Popular Street), Bereich um Fort Zancudo, Bereich um das BCSO in Paleto Bay, Bolingbroke State Prison, der Bereich und das Gelände der San Andreas Emergency Academy. (2) Diese dürfen nicht überflogen werden, soweit keine Gefährdung der öffentlichen Sicherheit zu erwarten ist und die Genehmigung entsprechend erteilt wurde. (3) Zuwiderhandlungen werden als gefährlicher Eingriff in den Luftverkehr geahndet."
    },
    {
      "number": "§ 14.",
      "title": "Aufsicht und Zuständigkeiten",
      "chapter": {
        "number": "II.",
        "title": "Besondere Vorschriften"
      },
      "text": "(1) Das Department of Justice ist zuständig für Genehmigungen, Rechtsverordnungen und Berufungsverfahren. (2) Die Exekutivbehörden sind berechtigt, bei Gefahr im Verzug Maßnahmen zur Gefahrenabwehr zu treffen."
    }
  ]
},
{
  "id": "media",
  "title": "MEDIA ACT (MA)",
  "category": "Gesetzbuch",
  "sourceFile": "S.A. STATE GOVERNMENT - Media Act.html",
  "sections": [
    {
      "number": "§ 1",
      "title": "Pressefreiheit",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Die Presse ist frei. Eine Zensur findet nicht statt. (2) Einschränkungen dürfen nur auf Grundlage der Verfassung und der allgemeinen Gesetze erfolgen. (3) Jede rechtswidrige Behinderung oder Einschüchterung der freien Pressearbeit ist unzulässig. (4) Niemand darf wegen einer gesetzmäßigen journalistischen Tätigkeit benachteiligt oder verfolgt werden."
    },
    {
      "number": "§ 2",
      "title": "Aufgabe der Presse",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Die Presse erfüllt eine öffentliche Aufgabe, indem sie in Angelegenheiten von öffentlichem Interesse: a) Nachrichten beschafft und verbreitet, b) Stellung nimmt, Kritik übt und c) zur freien Meinungsbildung beiträgt. (2) Presseorgane handeln im Bewusstsein ihrer gesellschaftlichen Verantwortung. (3) Missbrauch der Pressefreiheit, insbesondere zu Zwecken der Verleumdung oder strafbarer Inhalte, ist unzulässig."
    },
    {
      "number": "§ 3",
      "title": "Geltungsbereich",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "Dieses Gesetz gilt für alle periodischen und nichtperiodischen Druckwerke, Online-Publikationen, Rundfunkangebote und audiovisuelle Formate, die in San Andreas produziert oder verbreitet werden."
    },
    {
      "number": "§ 4",
      "title": "Informationsfreiheit",
      "chapter": {
        "number": "II.",
        "title": "Rechte und Pflichten der Presse"
      },
      "text": "(1) Behörden und öffentliche Einrichtungen sollen der Presse auf Antrag Auskünfte erteilen, soweit dies der öffentlichen Aufgabe der Presse dient. (2) Die Auskunft darf nur verweigert werden, wenn: a) Geheimhaltungsvorschriften oder der Schutz personenbezogener Daten entgegenstehen, b) schwebende Ermittlungs- oder Gerichtsverfahren gefährdet würden oder c) der Antrag offensichtlich unverhältnismäßig oder missbräuchlich gestellt ist. (3) Ein generelles Auskunftsverbot gegenüber der Presse ist unzulässig. (4) Behörden sollen Anfragen der Presse zeitnah bearbeiten, soweit öffentliche Interessen nicht beeinträchtigt werden. (5) Pressevertreter können ihre journalistische Tätigkeit durch geeignete Nachweise glaubhaft machen."
    },
    {
      "number": "§ 5",
      "title": "Impressumspflicht",
      "chapter": {
        "number": "II.",
        "title": "Rechte und Pflichten der Presse"
      },
      "text": "(1) Presseerzeugnisse sollen Angaben zum Herausgeber und Verantwortlichen enthalten. (2) Diese Angaben sollen insbesondere enthalten: a) Name oder Firma und Anschrift des Herausgebers, b) Namen des verantwortlichen Redakteurs, c) den sachlichen Zuständigkeitsbereich jedes verantwortlichen Redakteurs. (3) Für Online-Medien sollen diese Angaben leicht zugänglich sein. (4) Der verantwortliche Redakteur trägt die Verantwortung im Rahmen der geltenden Gesetze."
    },
    {
      "number": "§ 6",
      "title": "Sorgfaltspflicht",
      "chapter": {
        "number": "II.",
        "title": "Rechte und Pflichten der Presse"
      },
      "text": "(1) Die Presse hat Nachrichten mit der gebotenen journalistischen Sorgfalt zu prüfen. (2) Berichte und Darstellungen müssen deutlich zwischen Tatsachenbehauptungen, Meinungen und Kommentaren unterscheiden. (3) Veröffentlichungen dürfen keine strafbaren Inhalte enthalten oder unzulässig in Persönlichkeitsrechte eingreifen. (4) Fehlerhafte Veröffentlichungen sind unverzüglich zu korrigieren."
    },
    {
      "number": "§ 7",
      "title": "Gegendarstellung",
      "chapter": {
        "number": "II.",
        "title": "Rechte und Pflichten der Presse"
      },
      "text": "(1) Wird durch eine Veröffentlichung das Persönlichkeitsrecht einer Person verletzt, kann eine Gegendarstellung verlangt werden. (2) Die Gegendarstellung muss unverzüglich, in derselben Ausgabe oder auf derselben Plattform und mit vergleichbarer Hervorhebung veröffentlicht werden. (3) Der Anspruch entfällt, wenn die beanstandete Behauptung nachweislich zutreffend ist oder die Gegendarstellung ihrerseits offensichtlich unwahr ist."
    },
    {
      "number": "§ 8",
      "title": "Schutz von Informationsquellen",
      "chapter": {
        "number": "II.",
        "title": "Rechte und Pflichten der Presse"
      },
      "text": "(1) Pressevertreter dürfen die Identität ihrer Informationsquellen geheim halten. (2) Behörden dürfen Journalistinnen und Journalisten nicht dazu zwingen, ihre Quellen offen zu legen, es sei denn, es liegt eine richterliche Anordnung bei überwiegendem öffentlichen Interesse vor. (3) Durchsuchungen oder Beschlagnahmen in Redaktionsräumen sind nur auf richterliche Anordnung und bei Verdacht auf schwerwiegende Straftaten zulässig."
    },
    {
      "number": "§ 9",
      "title": "Kennzeichnung entgeltlicher Veröffentlichungen",
      "chapter": {
        "number": "II.",
        "title": "Rechte und Pflichten der Presse"
      },
      "text": "(1) Veröffentlichungen, für die ein Entgelt oder sonstiger Vorteil gewährt wird, sind deutlich als „Anzeige“ oder „Werbung“ zu kennzeichnen. (2) Gleiches gilt für Sponsoring, Produktplatzierungen oder bezahlte Beiträge in digitalen Formaten. (3) Verstöße gegen diese Kennzeichnungspflicht gelten als Irreführung der Öffentlichkeit und werden als Ordnungswidrigkeit geahndet."
    },
    {
      "number": "§ 10",
      "title": "Verantwortlichkeit",
      "chapter": {
        "number": "III.",
        "title": "Verantwortung und Haftung"
      },
      "text": "(1) Verantwortlich für den Inhalt einer Veröffentlichung sind der Herausgeber, der verantwortliche Redakteur und der Verfasser. (2) Bei anonymen oder pseudonymen Veröffentlichungen haftet der Herausgeber. (3) Der Eigentümer soll die redaktionelle Unabhängigkeit gewährleisten."
    },
    {
      "number": "§ 11",
      "title": "Haftung bei Regelverstößen",
      "chapter": {
        "number": "III.",
        "title": "Verantwortung und Haftung"
      },
      "text": "(1) Verstöße gegen dieses Gesetz, insbesondere gegen §4, §6, §7 und §9, können mit Geldbußen geahndet werden. (2) Bei vorsätzlicher Veröffentlichung rechtswidriger Inhalte können strafrechtliche Maßnahmen nach dem Strafgesetzbuch erfolgen. (3) Verstöße gegen Impressumspflichten (§ 5) oder Auskunftsverweigerung gegenüber Aufsichtsbehörden können mit einem Bußgeld geahndet werden."
    },
    {
      "number": "§ 12",
      "title": "Schutz journalistischer Tätigkeit",
      "chapter": {
        "number": "IV.",
        "title": "Verhältnis zu staatlichen Stellen"
      },
      "text": "(1) Pressevertreter dürfen bei ihrer Tätigkeit nicht rechtswidrig behindert oder eingeschüchtert werden. (2) Die Exekutive hat bei polizeilichen Maßnahmen auf die Tätigkeit von Pressevertretern Rücksicht zu nehmen. (3) Wird ein Presseausweis missbräuchlich verwendet, kann dieser entzogen werden."
    },
    {
      "number": "§ 13",
      "title": "Informationszugang und Akkreditierung",
      "chapter": {
        "number": "IV.",
        "title": "Verhältnis zu staatlichen Stellen"
      },
      "text": "(1) Pressevertreter haben das Recht auf Zugang zu öffentlichen Sitzungen, Gerichtsverhandlungen und Veranstaltungen, soweit keine Geheimhaltungsgründe entgegenstehen. (2) Akkreditierungen dürfen den Zugang nicht willkürlich einschränken. (3) Die Verweigerung der Akkreditierung ist schriftlich zu begründen und kann beim zuständigen Gericht angefochten werden."
    },
    {
      "number": "§ 14",
      "title": "Aufsicht",
      "chapter": {
        "number": "V.",
        "title": "Aufsicht und Schlussbestimmungen"
      },
      "text": "(1) Die Einhaltung dieses Gesetzes kann durch das Department of Justice überprüft werden. (2) Das DOJ kann bei Verstößen Maßnahmen im Rahmen der geltenden Gesetze anordnen und Bußgelder verhängen. (3) Gegen Entscheidungen des DOJ kann binnen 14 Tagen Beschwerde beim Gericht eingelegt werden."
    },
    {
      "number": "§ 15",
      "title": "Verhältnis zu anderen Gesetzen",
      "chapter": {
        "number": "V.",
        "title": "Aufsicht und Schlussbestimmungen"
      },
      "text": "Soweit dieses Gesetz keine besonderen Vorschriften enthält, gelten die allgemeinen Bestimmungen des Strafgesetzbuchs und der Verfassung des Staates San Andreas."
    }
  ]
},
{
  "id": "company",
  "title": "COMPANY ACT (CA)",
  "category": "Gesetzbuch",
  "sourceFile": "S.A. STATE GOVERNMENT - Company Act.html",
  "sections": [
    {
      "number": "§ 1",
      "title": "Zweck des Gesetzes",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Dieses Gesetz regelt die rechtliche Anerkennung, Entwicklung, Registrierung, Überwachung und Sicherheit von Unternehmen innerhalb des Staates San Andreas. (2) Ziel ist die Förderung wirtschaftlicher Entwicklung, die Gewährleistung von Transparenz, öffentlicher Sicherheit, Brandschutz sowie einer ordnungsgemäßen Unternehmensführung. (3) Das Bureau of Commerce ist die zentrale staatliche Anlaufstelle für alle Angelegenheiten im Zusammenhang mit Unternehmen, Start-Ups und wirtschaftlicher Entwicklung."
    },
    {
      "number": "§ 2",
      "title": "Begriffsbestimmungen",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Unternehmen im Sinne dieses Gesetzes sind alle natürlichen oder juristischen Personen, die dauerhaft wirtschaftliche Tätigkeiten ausüben. (2) Als Start-Up gilt ein neu gegründetes Unternehmen, welches seine Geschäftstätigkeit aufgenommen hat, jedoch weder über einen genehmigten festen Unternehmensstandort (mit Innenausbau) verfügt noch Mitarbeiter beschäftigt. (3) Als anerkanntes Unternehmen gilt ein Unternehmen, das im Unternehmensregister des Bureau of Commerce eingetragen wurde. (4) Als Unternehmen gelten auch 24/7-Läden."
    },
    {
      "number": "§ 3",
      "title": "Registrierung von Start-Ups und Unternehmen",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Zur Aufnahme einer wirtschaftlichen Tätigkeit genügt die Registrierung eines Gewerbes beim Los Santos Amt. (2) Mit erfolgreicher Gewerberegistrierung gilt das Unternehmen als Start-Up und darf seine Geschäftstätigkeit unmittelbar aufnehmen. (3) Für Start-Ups besteht keine Verpflichtung zur Eintragung in das Unternehmensregister des Bureau of Commerce. (4) Eine Eintragung in das Unternehmensregister des Bureau of Commerce wird verpflichtend, sobald das Unternehmen: a) einen festen Unternehmensstandort (mit Innenausbau) beantragt, b) Mitarbeiter einstellen möchte oder c) sonstige staatliche Sonderrechte oder Unternehmensprivilegien beantragt. (5) Vor einer Eintragung nach Absatz 4 ist gegenüber dem Bureau of Commerce nachzuweisen, dass ein tatsächliches öffentliches Interesse oder ein entsprechender Andrang der Bevölkerung an den angebotenen Dienstleistungen oder Waren besteht. (6) Das Bureau of Commerce entscheidet nach pflichtgemäßem Ermessen über die Aufnahme in das Unternehmensregister. (7) Änderungen in Eigentumsverhältnissen, Geschäftsführung oder Tätigkeitsbereich sind dem Bureau of Commerce unverzüglich mitzuteilen. (8) In das Unternehmensregister sind für jedes Unternehmen mindestens folgende Angaben einzutragen: a) Unternehmensname b) Branche bzw. Tätigkeitsbereich c) Kontaktangaben (Telefonnummer und E-Mail-Adresse) d) Name des Geschäftsführers oder Inhabers e) Registriernummer f) Postleitzahl des Unternehmenssitzes g) Unternehmensstatus (aktiv oder inaktiv)"
    },
    {
      "number": "§ 4",
      "title": "Laufende Überwachung und Berichtspflichten",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Ausschließlich im Unternehmensregister eingetragene Unternehmen unterliegen der fortlaufenden staatlichen Aufsicht durch das Bureau of Commerce. (2) Am Anfang jedes Quartals ist ein Tätigkeits- und Sicherheitsbericht beim Bureau of Commerce einzureichen. (3) Der Bericht muss insbesondere Angaben zu Betriebsstandorten, Mitarbeiterzahl, ungefährem Umsatz der letzten drei Monate, geschätztem Umsatz der kommenden drei Monate sowie den Sicherheitsmaßnahmen enthalten. (4) Am Anfang jedes Quartals erstellt das San Andreas Fire Department einen Sicherheitsbericht und stellt diesen dem im Unternehmensregister eingetragenen Inhaber zur Verfügung. (5) Für Start-Ups sowie 24/7-Läden entfällt die Pflicht zur Einreichung eines Tätigkeits- und Sicherheitsberichts."
    },
    {
      "number": "§ 5",
      "title": "Weitere sicherheitsrelevante Pflichten",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Unternehmen müssen alle sicherheitsrelevanten Maßnahmen einhalten, die dem Schutz von Mitarbeitern, Kunden und der Öffentlichkeit dienen. (2) Im Auftrag des Department of Justice können Exekutivbehörden unangekündigte Kontrollen durchführen. (3) Über durchgeführte Kontrollen ist ein Bericht anzufertigen und dem Auftraggeber beziehungsweise der Leitung des Department of Justice zu übermitteln. (4) Das Bureau of Commerce steht Unternehmen und Start-Ups jederzeit beratend bei Gründung, Entwicklung, Expansion und Registrierung zur Verfügung."
    },
    {
      "number": "§ 6",
      "title": "Sanktionen",
      "chapter": {
        "number": "I.",
        "title": "Allgemeine Bestimmungen"
      },
      "text": "(1) Verstöße gegen dieses Gesetz können mit folgenden Maßnahmen geahndet werden: a) Geldbußen b) Vorübergehende Betriebsschließung c) Entzug der Unternehmensanerkennung (2) Bei schweren oder wiederholten Verstößen kann ein Unternehmen dauerhaft aus dem Unternehmensregister gelöscht werden. (3) Einem Unternehmen kann die Ausübung seiner Tätigkeit ganz oder teilweise durch das Department of Justice untersagt werden, wenn es wiederholt oder systematisch gegen geltendes Recht verstößt. (4) Im Rahmen eines entsprechenden Verfahrens ist das Department of Justice befugt, die Tätigkeit eines Unternehmens vorübergehend oder dauerhaft zu untersagen. (5) Die Löschung aus dem Unternehmensregister berührt nicht die grundsätzliche Möglichkeit, ein neues Start-Up nach § 3 Abs. 1 und 2 zu gründen, sofern keine gerichtliche oder behördliche Untersagung entgegensteht."
    }
  ]
},
{
  "id": "homeland",
  "title": "HOMELAND SECURITY ACT (HSA)",
  "category": "Gesetzbuch",
  "sourceFile": "S.A. STATE GOVERNMENT - Homeland Security Act.html",
  "sections": [
    {
      "number": "§ 1.",
      "title": "Geiselnahme",
      "chapter": {
        "number": "I.",
        "title": "Terroristische Handlungen"
      },
      "text": "(1) Wer eine Person gegen ihren Willen festhält und gegenüber Dritten (z.B Staat, Angehörigen, Exekutivbehörden) als Druckmittel für eine Forderung oder Handlungen nutzt und somit eine Freiheitsberaubung begeht, begeht eine Geiselnahme. Diese Handlung stellt eine Straftat dar und wird nach Maßgabe des Strafkatalogs verfolgt und bestraft. (2) Sollten bei einer Geiselnahme mehr als drei Personen von den Geiselnehmern als Geisel genommen werden, kann das maximale Strafmaß um jeweils 20 Hafteinheiten, sowie 20.000$ pro Geisel erhöht werden."
    },
    {
      "number": "§ 2.",
      "title": "Vernichtung von Staatlichen Akten",
      "chapter": {
        "number": "I.",
        "title": "Terroristische Handlungen"
      },
      "text": "(1) Wer staatliche Akten ganz oder teilweise bis zur Unkenntlichkeit vernichtet, beschädigt, entfernt, verfälscht, oder eine andere Person dazu anstiftet, nötigt oder veranlasst, macht sich strafbar und wird gemäß den Bestimmungen des Strafkatalogs des Staates San Andreas bestraft. (2) Als staatliche Akten im Sinne dieses Paragraphen gelten sämtliche Unterlagen, Dokumente oder Datensätze, die von staatlichen Behörden oder öffentlichen Einrichtungen geführt oder verwaltet werden, gemäß §3 ATG. (3) Der Versuch ist strafbar."
    },
    {
      "number": "§ 3.",
      "title": "Staatliche Akten",
      "chapter": {
        "number": "I.",
        "title": "Terroristische Handlungen"
      },
      "text": "(1) Als staatliche Akten gelten sämtliche schriftlichen, elektronischen oder digitalen Unterlagen, die von staatlichen Behörden, Ministerien oder öffentlichen Einrichtungen des Staates San Andreas geführt, erstellt oder verwaltet werden. (2) Staatliche Akten im Sinne dieses Gesetzes umfassen insbesondere behördliche Verwaltungsakten, polizeiliche Einsatz- und Ermittlungsunterlagen, justizielle Dokumente der Gerichte und des Department of Justice, medizinische Unterlagen, die im Rahmen öffentlicher Gesundheitsdienste, insbesondere durch das Los Santos Medical Department, geführt werden. (3) Der Schutz und die Unversehrtheit dieser Akten unterliegen der Aufsicht der jeweiligen Behörde."
    },
    {
      "number": "§ 4.",
      "title": "Raub von staatlichen Lieferungen",
      "chapter": {
        "number": "I.",
        "title": "Terroristische Handlungen"
      },
      "text": "(1) Wer eine staatliche Lieferung, einen Transport staatlicher Güter oder ein öffentliches Versorgungsgut mit Gewalt, durch Drohung oder unter Anwendung von Zwangsmitteln raubt, stiehlt oder dessen Durchführung behindert, macht sich strafbar und wird nach den Bestimmungen des Strafkatalogs des Staates San Andreas bestraft. (2) Gleiches gilt für Personen, die eine solche Tat planen, unterstützen oder begünstigen. (3) Staatliche Lieferungen im Sinne dieses Gesetzes umfassen insbesondere Transporte oder Verteilvorgänge, die durch Behörden, öffentliche Dienststellen oder beauftragte Unternehmen im Auftrag des Staates durchgeführt werden."
    },
    {
      "number": "§ 5.",
      "title": "Staatliche Lieferungen",
      "chapter": {
        "number": "I.",
        "title": "Terroristische Handlungen"
      },
      "text": "(1) Als staatliche Lieferungen gelten sämtliche Versorgungs-, Transport- und Waffenlieferungen, die im Auftrag oder unter Aufsicht staatlicher Stellen erfolgen. (2) Staatliche Lieferungen umfassen insbesondere: Versorgungs- und Waffenlieferungen an Behörden der Exekutive, logistische Lieferungen für die Judikative, medizinische oder technische Versorgungslieferungen für das Los Santos Medical Department (LSMD) sowie das Los Santos Fire Department (LSFD), sonstige Lieferungen, die der Aufrechterhaltung des staatlichen Dienstbetriebs dienen. (3) Die Durchführung und Sicherung staatlicher Lieferungen obliegt den zuständigen Behörden der Exekutive."
    },
    {
      "number": "§ 6.",
      "title": "Bombenanschlag",
      "chapter": {
        "number": "I.",
        "title": "Terroristische Handlungen"
      },
      "text": "(1) Wer einen Anschlag mittels explosiver Stoffe oder Sprengkörper ausführt oder versucht, begeht einen Bombenanschlag. (2) Ein Bombenanschlag liegt insbesondere vor, wenn durch den Einsatz solcher Mittel das Leben, die körperliche Unversehrtheit oder das Eigentum anderer gefährdet oder die öffentliche Sicherheit beeinträchtigt wird. (3) Die Tat sowie der Versuch werden gemäß den im Strafkatalog des Staates San Andreas festgelegten Maßstäben geahndet."
    },
    {
      "number": "§ 7.",
      "title": "Gefährdung der nationalen Sicherheit",
      "chapter": {
        "number": "I.",
        "title": "Terroristische Handlungen"
      },
      "text": "(1) Wer durch Handlungen, Planungen oder Unterstützungshandlungen die nationale Sicherheit des Staates San Andreas gefährdet oder Maßnahmen unternimmt, die geeignet sind, die staatliche Ordnung, die öffentliche Sicherheit oder die verfassungsmäßige Struktur des Staates zu beeinträchtigen, macht sich strafbar, sofern eine konkrete und nachweisbare Gefährdung der öffentlichen Sicherheit oder staatlichen Ordnung vorliegt. (2) Gleiches gilt für Personen oder Organisationen, die: den Staat oder seine Institutionen aktiv oder passiv untergraben, sicherheitsrelevante Informationen unbefugt weitergeben oder veröffentlichen, oder Handlungen vornehmen, die geeignet sind, das Vertrauen in staatliche Organe oder die Integrität der öffentlichen Verwaltung zu gefährden, sofern hierdurch eine konkrete Gefährdung der öffentlichen Sicherheit oder staatlichen Funktionsfähigkeit entsteht."
    },
    {
      "number": "§ 8.",
      "title": "Zweck",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) Dieser Abschnitt regelt die Einführung, Anwendung und Aufhebung der sogenannten DEFCON-Stufen im Staat San Andreas. (2) Ziel ist es, eine geordnete und abgestufte Reaktion auf sicherheitsrelevante Lagen zu gewährleisten und die öffentliche Ordnung, den Schutz der Bevölkerung sowie die Handlungsfähigkeit des Staates sicherzustellen."
    },
    {
      "number": "§ 9.",
      "title": "Begriffsbestimmungen",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) DEFCON-Stufe bezeichnet eine festgelegte Alarmstufe, welche die aktuelle Sicherheitslage des Staates beschreibt. (2) Sicherheitslage ist jede Situation, in der eine potenzielle oder akute Gefahr für die öffentliche Sicherheit, die nationale Ordnung oder das Staatsgebiet besteht. (3) Sicherheitsbehörden im Sinne dieses Gesetzes sind das Los Santos Police Department (LSPD), das Blaine County Sheriffs Office (BCSO), die San Andreas Highway Patrol (SAHP) , das Los Santos Medical Department (LSMD), Los Santos Fire Department (LSFD) sowie die National Guard von San Andreas."
    },
    {
      "number": "§ 10.",
      "title": "Ausrufung und Zuständigkeiten",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) Die Festlegung oder Änderung einer DEFCON-Stufe erfolgt ausschließlich durch eine der folgenden Personen: a) dem Chief Justice, oder b) dem Deputy Chief Justice, oder c) dem Chief of Police, sowie d) dem Sheriff. (2) Die Ausrufung einer DEFCON-Stufe ist unverzüglich öffentlich bekanntzugeben. Dies erfolgt durch staatliche Mitteilungen, Presseerklärungen oder über offizielle Kommunikationskanäle der Regierung. (3) Die Bevölkerung ist verpflichtet, den Anweisungen der zuständigen Behörden während einer DEFCON-Lage Folge zu leisten."
    },
    {
      "number": "§ 11.",
      "title": "Geltungsdauer und Aufhebung",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) Eine DEFCON-Stufe bleibt in Kraft, bis sie durch dieselbe Instanz, die sie ausgerufen hat, offiziell herabgesetzt oder aufgehoben wird. (2) Bei missbräuchlicher Ausrufung oder unbefugter Bekanntgabe einer DEFCON-Stufe werden disziplinarische Maßnahmen eingeleitet (§ 14 DFG)."
    },
    {
      "number": "§ 12.",
      "title": "DEFCON-Stufen im Überblick",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "DEFCON 4: Normale Lage - Es besteht keine erkennbare Bedrohung für den Staat oder die Bevölkerung. - Sicherheitskräfte befinden sich im regulären Dienstbetrieb. - Öffentliche Einrichtungen und Verkehrswege arbeiten uneingeschränkt. - Keine besonderen Anweisungen an die Bevölkerung. DEFCON 3: Erhöhte Präsenz - Hinweise auf potenzielle Bedrohungen oder verdächtige Aktivitäten liegen vor. - Sämtliche Behörden erhöhen ihre Präsenz und Kontrolltätigkeiten. - Sicherheitsbereiche, insbesondere Regierungsgebäude, Kraftwerke und Flughäfen, werden verstärkt überwacht. - Öffentliche Versammlungen können eingeschränkt oder untersagt werden, sofern eine konkrete Gefährdung der öffentlichen Sicherheit vorliegt. DEFCON 2: Akute Gefährdungslage - Eine bestätigte Bedrohung für die öffentliche Sicherheit liegt vor, beispielsweise durch Anschläge, Seuchen oder bewaffnete Konflikte. - Staatliche Sicherheitskräfte werden in Vollbereitschaft versetzt. - Militärische Unterstützung innerhalb des Stadtgebiets ist zulässig. - Ausgangsbeschränkungen, Kontrollpunkte und Zugangskontrollen können eingerichtet werden. - Personen- und Fahrzeugdruchsuchungen können bei Vorliegen einer konkreten Gefahrenlage oder auf richterliche Anordnung durchgeführt werden. DEFCON 1: Nationaler Notstand - Der Staat befindet sich in einem akuten Krisen- oder Kriegszustand. - Die Exekutive, National Guard, Medical Department und Fire Department unterstehen einer zentralen Einsatzleitung. - Öffentliche Einrichtungen können geschlossen und der zivile Personenverkehr stark eingeschränkt werden. - Der San Andreas Congress ist berechtigt, den Ausnahmezustand gemäß den nationalen Notstandsbestimmungen auszurufen."
    },
    {
      "number": "§ 13.",
      "title": "Missbrauch oder Falschausrufung",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) Die unbefugte oder vorsätzlich falsche Ausrufung einer DEFCON-Stufe wird mit einer Geldstrafe von bis zu 1.000.000 $ oder einer Freiheitsstrafe von bis zu 120 Hafteinheiten geahndet. (2) In besonders schweren Fällen kann die verantwortliche Person aus dem öffentlichen Dienst ausgeschlossen werden."
    },
    {
      "number": "§ 14.",
      "title": "Verstoß gegen DEFCON-Anordnungen",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) Personen, die während einer aktiven DEFCON-Stufe den Anweisungen staatlicher Behörden nicht Folge leisten, handeln ordnungswidrig. (2) Der Verstoß kann mit einer Geldbuße von bis zu 100.000 $ oder einer Freiheitsstrafe von bis zu 40 Hafteinheiten geahndet werden. (3) Bei Gefährdung von Menschenleben kann eine Freiheitsstrafe von bis zu 100 Hafteinheiten verhängt werden."
    },
    {
      "number": "§ 15.",
      "title": "Sabotage und Behinderung von Sicherheitsmaßnahmen",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) Das vorsätzliche Stören, Behindern oder Unterlaufen staatlicher Sicherheitsmaßnahmen während einer DEFCON-Lage gilt als schwerwiegendes Vergehen. (2) Eine solche Handlung wird mit einer Freiheitsstrafe von bis zu 150 Hafteinheiten bestraft."
    },
    {
      "number": "§ 16.",
      "title": "Zuständige Ermittlungsbehörden",
      "chapter": {
        "number": "II.",
        "title": "DEFCON - Defense Condition"
      },
      "text": "(1) Für die Durchsetzung und Ahndung von Verstößen gegen dieses Gesetz sind die Strafverfolgungsbehörden des Staates San Andreas zuständig. (2) Das Department of Justice koordiniert oder übernimmt Ermittlungen im Rahmen gesetzlicher Zuständigkeiten, sofern dies der Aufklärung oder Wahrung der nationalen Sicherheit dient."
    },
    {
      "number": "§ 17.",
      "title": "Terroristen Titel",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Der Terroristentitel darf ausschließlich durch einen Richter auf Antrag der zuständigen Sicherheitsbehörden ausgesprochen werden, wenn von der betreffenden Person oder Personengruppe eine erhebliche Gefährdung für den Staat San Andreas ausgeht. Eine erhebliche Gefährdung nach Satz 1 liegt vor, wenn Tatsachen die Schlussfolgerung rechtfertigen, dass die Person oder Personengruppe wiederholt schwere staatsgefährdende Straftaten auf Grundlage konkreter Tatsachen und Beweise begehen wird. (2) Der Titel gilt für eine Dauer von höchstens zwei Wochen und muss anschließend durch richterlichen Beschluss erneuert oder aufgehoben werden. (3) Eine Verlängerung darf nur einmalig erfolgen und erfordert eine erneute richterliche Prüfung. (4) Der Terroristentitel kann entzogen werden, sobald die Gefährdungslage entfällt oder neue Beweise die Bezeichnung als Terrorist nicht mehr rechtfertigen."
    },
    {
      "number": "§ 18.",
      "title": "Funktion des Terroristen Titels",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Der Terroristentitel kann zu erweiterten sicherheitsrechtlichen Maßnahmen führen, insbesondere: verstärkte Überwachung erleichterte Festnahme unter richterlicher Kontrolle Einschränkung bestimmter Bewegungsrechte (2) Grundrechte, insbesondere das Recht auf ein faires Verfahren, bleiben unberührt."
    },
    {
      "number": "§ 19.",
      "title": "Fahndung",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Personen oder Organisationen, die den Titel „Terrorist“ erhalten haben, sind national zur Fahndung ausgeschrieben. (2) Die Fahndung erfolgt durch die zuständigen Sicherheitsbehörden des Staates San Andreas. (3) Betroffene Personen dürfen durch Vollzugsbeamte festgenommen und, sofern ein richterlicher Beschluss vorliegt, in Untersuchungshaft überführt werden."
    },
    {
      "number": "§ 20.",
      "title": "Erweiterte Terrorismusbekämpfung",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Bei Bedarf kann ein zuständiger Richter unter Berücksichtigung der Verhältnismäßigkeit und der bestehenden Gefährdungslage eine erweiterte Stufe des Terroristentitels anordnen. (2) Verstößt eine Person mit Terroristentitel erneut gegen geltende Gesetze, so werden die nach Absatz 3 definierten Strafstufen angewendet. Jede Stufe stellt eine zusätzliche Verschärfung des Strafmaßes dar. (3) Das maximale Strafmaß darf die in Absatz 3 genannten Grenzen nicht überschreiten. Es gelten folgende Stufen: Stufe 1: 75 Hafteinheiten und 120.000 $ Bußgeld Stufe 2: 100 Hafteinheiten und 240.000 $ Bußgeld Stufe 3: 140 Hafteinheiten und 300.000 $ Bußgeld Stufe 4: 190 Hafteinheiten und 410.000 $ Bußgeld (4) Eine höhere Stufe darf nur durch richterlichen Beschluss und unter Begründung der öffentlichen Notwendigkeit ausgesprochen werden. (5) Nach Ablauf der Haftzeit kann der Richter entscheiden, ob eine Sicherungsverwahrung nach Maßgabe der Gefährdungslage angeordnet wird."
    },
    {
      "number": "§ 21.",
      "title": "Terroristische Organisationen",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Eine terroristische Organisation im Sinne dieses Gesetzes ist eine auf Dauer angelegte Vereinigung von mindestens drei Personen, deren Ziel oder Tätigkeit auf die Begehung terroristischer Straftaten nach Abschnitt I gerichtet ist. (2) Die Mitgliedschaft, Unterstützung oder Werbung für eine terroristische Organisation ist strafbar. (3) Die Strafe richtet sich nach Maßgabe des Strafkatalogs."
    },
    {
      "number": "§ 22.",
      "title": "Zuständigkeitsverteilung im Krisenfall",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Im Falle einer akuten Bedrohungslage gemäß DEFCON 1 erfolgt durch die zuständigen Exekutivbehörden über alle staatlichen Kräfte. (2) Alle Behörden sind der Einsatzleitung unmittelbar unterstellt. (3) Die National Guard von San Andreas wird nur auf ausdrücklichen Beschluss des Department of Justice eingesetzt."
    },
    {
      "number": "§ 23.",
      "title": "Kontrolle und Missbrauchsprüfung",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Jede Ausrufung von DEFCON 2 oder höher, sowie jede Ernennung eines Terroristentitels, ist innerhalb von 48 Stunden richterlich zu überprüfen. (2) Wird festgestellt, dass Maßnahmen rechtswidrig oder unverhältnismäßig waren, sind diese sofort aufzuheben und Betroffene zu rehabilitieren. (3) Die Kontrollinstanz ist das zuständige Gericht."
    },
    {
      "number": "§ 24.",
      "title": "Präventive Maßnahmen",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Bei konkretem Verdacht auf terroristische Aktivitäten dürfen Sicherheitsbehörden personenbezogene Daten erheben, Telekommunikation überwachen und Observationen durchführen. (2) Diese Maßnahmen bedürfen eines richterlichen Beschlusses, außer es liegt unmittelbare Gefahr im Verzug vor. (3) Der Umfang der Überwachung ist nach Wegfall der Gefahr unverzüglich einzuschränken oder zu beenden."
    },
    {
      "number": "§ 25.",
      "title": "Geheimhaltung und Informationssicherheit",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Informationen, die im Zusammenhang mit terroristischen Ermittlungen stehen, sind nach Geheimhaltungsstufen einzuteilen: a) vertraulich, b) geheim, c) streng geheim. (2) Die unbefugte Weitergabe oder Veröffentlichung solcher Informationen ist strafbar."
    },
    {
      "number": "§ 26.",
      "title": "Aufhebung von Maßnahmen",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "Beschlagnahmte Gegenstände sind, soweit sie nicht als Beweismittel dienen, an ihre Eigentümer zurückzugeben."
    },
    {
      "number": "§ 27.",
      "title": "Unterstützungshandlungen",
      "chapter": {
        "number": "III.",
        "title": "Weitere Maßnahmen"
      },
      "text": "(1) Wer vorsätzlich einer terroristischen Person oder Organisation finanzielle, logistische oder materielle Unterstützung gewährt, macht sich strafbar. (2) Gleiches gilt für Personen, die solche Handlungen bewusst dulden, fördern oder verschleiern. (3) Die Strafe bemisst sich nach dem Strafkatalog."
    }
  ]
},
{
  "id": "justice",
  "title": "Justice Code (JC)",
  "category": "Gesetzbuch",
  "sourceFile": "S.A. STATE GOVERNMENT - Justice Code.html",
  "sections": [
    {
      "number": "§ 1.",
      "title": "Einrichtung in aktuelles Recht",
      "chapter": null,
      "text": "Das Department of Justice wurde als oberste Behörde für Recht und Strafverfolgung in San Andreas gegründet."
    },
    {
      "number": "§ 2.",
      "title": "Zweck und Mission",
      "chapter": null,
      "text": "(1) Das DOJ schützt die Rechtsstaatlichkeit, wahrt die verfassungsmäßigen Rechte der Bürger und stellt die Durchsetzung des Rechts sicher. (2) Das Department of Justice übt die Aufsicht und Kontrolle über die Anwendung dieses Gesetzes aus. (3) Änderungen, Ergänzungen oder Aufhebungen der Gesetze erfolgen ausschließlich nach den verfassungsmäßigen Vorschriften unter Beteiligung des San Andreas Congress. (4) Entsprechende Änderungen treten erst nach Veröffentlichung im Gesetzesregister in Kraft."
    },
    {
      "number": "§ 3.",
      "title": "Zuständigkeiten",
      "chapter": null,
      "text": "(1) Die Zuständigkeit umfasst Straftaten, strafrechtliche und staatliche Angelegenheiten, sowie alle Fälle von nationaler und regionaler Bedeutung im Staate San Andreas. (2) Das Department of Justice erhält die Bestimmungen über Ernennung, Pflichten und Rechte der Bediensteten."
    },
    {
      "number": "§ 4.",
      "title": "Verhältnismäßigkeit und Schutz der Bürgerrechte",
      "chapter": null,
      "text": "(1) Bei der Ausübung seiner Befugnisse hat das Department die Verhältnismäßigkeit zu wahren und die verfassungsrechtlich gewährleisteten Rechte zu schützen. (2) Das Department of Justice achtet die Bürgerrechte und unterliegt besonderen Berichtspflichten bei Maßnahmen mit Eingriffscharakter. (3) Es wird ein San Andreas Congress für allgemeine Sicherheitsbedenken in San Andreas gegründet. Dieser setzt sich aus dem Chief Justice, Deputy Chief Justice als beratendes Gremium ohne Entscheidungsbefugnis, und aus maximal zwei Vertretern aus jeder staatlichen Behörde zusammen. Zudem besetzt der Chief Judge einen Posten im Congress als Vertreter der Richterschaft. Zu den teilnehmenden Behörden zählen: - Los Santos Police Department - Blaine County Sheriffs Office - Los Santos Medical Department - Los Santos Fire Department - Federal Investigation Bureau - San Andreas Highway Patrol Dieser Rat spricht über aktuelle Themen im Zusammenhang mit Gesetzen, dem Schutz der Bürger und deren Rechte."
    },
    {
      "number": "§ 5.",
      "title": "Delegation und Verfahrenszuständigkeiten",
      "chapter": null,
      "text": "Der Chief Justice kann Befugnisse an untergeordnete Beamte delegieren."
    },
    {
      "number": "§ 6.",
      "title": "Autorität des Chief Justice und Deputy Chief Justice",
      "chapter": null,
      "text": "(1) Der Chief Justice und Deputy Chief Justice sind die oberste Leitungsfunktion innerhalb des Department of Justice und befugt, alle Justizmaßnahmen zu überwachen oder einzuleiten. (2) Der Chief Justice und Deputy Chief Justice können Empfehlungen und rechtliche Einschätzungen aussprechen. Eine verbindliche Weisungsbefugnis gegenüber Exekutivbehörden besteht nicht."
    },
    {
      "number": "§ 7.",
      "title": "Justizielle Autorität",
      "chapter": {
        "number": "II.",
        "title": "Gerichtliche Abteilung"
      },
      "text": "(1) Die Rechtsprechung wird durch unabhängige Gerichte ausgeübt. (2) Die in diesem Gesetz genannten Gerichte sind nicht befugt, Verfahren zur Prüfung der Verfassungsmäßigkeit von Regelungen oder Maßnahmen einzuleiten, die sie selbst entworfen, konzipiert oder an deren Entstehung sie maßgeblich beteiligt waren."
    },
    {
      "number": "§ 8.",
      "title": "Rechtssprechungsbefugnisse",
      "chapter": {
        "number": "II.",
        "title": "Gerichtliche Abteilung"
      },
      "text": "(1) Gerichte sind befugt, Entscheidungen zu treffen, Urteile zu fällen und Rechtsmittel zuzulassen. (2) Sie können vorläufige Anordnungen erlassen, um Rechte zu sichern oder Schaden abzuwenden. (3) Die Gerichte handeln unabhängig und nur auf Grundlage von Gesetz und Recht."
    },
    {
      "number": "§ 9.",
      "title": "Richterliche Kompetenz",
      "chapter": {
        "number": "II.",
        "title": "Gerichtliche Abteilung"
      },
      "text": "(1) Richter sind zu jederzeit unabhängig und dürfen nicht in laufende Ermittlungen oder Prozesse eingewiesen werden. (2) Richter entscheiden über Klagen, Anträge und Berufungen innerhalb ihrer Zuständigkeit. (3) Richter dürfen nur in Fällen urteilen, bei denen keine persönliche oder dienstliche Befangenheit besteht. (4) Richter sind verpflichtet, die Verfassung und geltendes Recht zu wahren. (5) Richter können in geeigneten Fällen außergerichtliche Einigungen anregen oder moderieren, sofern beide Parteien zustimmen und dadurch Verfahrensrechte nicht eingeschränkt werden."
    },
    {
      "number": "§ 10.",
      "title": "Veröffentlichung von Entscheidungen",
      "chapter": {
        "number": "II.",
        "title": "Gerichtliche Abteilung"
      },
      "text": "(1) Urteile und Beschlüsse der Gerichte sind schriftlich niederzulegen. (2) Grundsatzentscheidungen sind zu veröffentlichen, soweit dies nicht die Sicherheit des Staats oder Schutzrechte Dritter gefährdet. (3) Veröffentlichungen erfolgen in einer offiziellen Gerichtsakte oder auf der Website des Department of Justice."
    },
    {
      "number": "§ 11.",
      "title": "Berufung",
      "chapter": {
        "number": "II.",
        "title": "Gerichtliche Abteilung"
      },
      "text": "(1) Gegen Entscheidungen der Hauptverhandlung kann innerhalb von 14 Tagen nach der Entscheidung Berufung eingelegt werden. (2) Ein anderer Richter überprüft sowohl Rechtsanwendung als auch Verfahrensfehler."
    },
    {
      "number": "§ 12.",
      "title": "Zuständigkeit der Staatsanwälte",
      "chapter": {
        "number": "III.",
        "title": "Aufgaben und Befugnisse der Staatsanwälte"
      },
      "text": "(1) Die Staatsanwälte sind befugt, im Namen des Department of Justice strafrechtliche Verfahren einzuleiten und zu führen. (2) Sie vertreten die Interessen des Staates San Andreas in allen strafrechtlichen Verfahren vor erstinstanzlichen Gerichten und Berufungsgerichten. (3) Sie sind berechtigt, im Rahmen ihrer Zuständigkeit Ermittlungen zu veranlassen und Strafanzeigen einzureichen."
    },
    {
      "number": "§ 13.",
      "title": "Verfahrensführung",
      "chapter": {
        "number": "III.",
        "title": "Aufgaben und Befugnisse der Staatsanwälte"
      },
      "text": "(1) Staatsanwälte entscheiden über die Erhebung von Anklagen. (2) Sie haben die Pflicht, die Ermittlungsbehörden bei der Aufklärung von Straftaten zu unterstützen und auf rechtmäßige Durchführung der Ermittlungen zu achten. (3) Staatsanwälte wirken an der Erstellung von Gutachten zu rechtlichen Fragen mit, soweit dies zur Durchsetzung des Strafrechts erforderlich ist."
    },
    {
      "number": "§ 14.",
      "title": "Verpflichtungen und Aufgaben",
      "chapter": {
        "number": "III.",
        "title": "Aufgaben und Befugnisse der Staatsanwälte"
      },
      "text": "(1) Staatsanwälte haben unparteiisch und nach Recht und Gesetz zu handeln. Die Staatsanwaltschaft hat sowohl belastende als auch entlastende Umstände mit gleicher Sorgfalt zu ermitteln und in das Verfahren einzubringen. (2) Sie haben dafür Sorge zu tragen, dass die Rechte der Beschuldigten, Opfer und Zeugen gewahrt bleiben."
    },
    {
      "number": "§ 15.",
      "title": "Notarielle Befugnisse der Richter",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "Richter können in zivilrechtlich bedeutsamen Fällen Beglaubigungen vornehmen, sofern dies nicht im Widerspruch zu ihrer Rolle im Strafverfahren steht und soweit gesetzlich vorgesehen."
    },
    {
      "number": "§ 16.",
      "title": "Begriffsbestimmungen",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) DOJ bezeichnet das Department of Justice des Staates San Andreas. (2) Gericht umfasst alle unabhängigen staatlichen Instanzen. (3) Richter sind Personen, die nach Ernennung durch den Chief Justice oder Deputy Chief Justice zur Ausübung richterlicher Gewalt befugt sind. (4) Staatsanwälte sind Bedienstete des DOJ, die zur Vertretung der Anklage im Namen des Staates berufen sind. (5) Beamte im Sinne dieses Gesetzes sind alle Personen, die in einem Dienstverhältnis mit dem Department of Justice stehen."
    },
    {
      "number": "§ 17.",
      "title": "Ernennung, Amtszeit und Entlassung",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Richter werden vom Chief Justice ernannt und durch Aushändigung der Ernennungsurkunde in ihr Amt eingeführt. (2) Die Amtszeit beträgt drei Monate und kann durch erneute Berufung verlängert werden. (3) Eine Entlassung aus dem Amt ist nur bei grober Pflichtverletzung, Dienstvergehen oder Verlust der Amtsfähigkeit zulässig. (4) Über die Entlassung entscheidet der Chief Justice im Austausch mit dem Deputy Chief Justice."
    },
    {
      "number": "§ 18.",
      "title": "Unabhängigkeit der Justiz",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Richter sind in ihrer Entscheidungsfindung unabhängig und nur dem Gesetz unterworfen. (2) Weisungen in Einzelfällen sind unzulässig. (3) Jede Beeinflussung richterlicher Tätigkeit durch Exekutive oder Legislative ist verboten."
    },
    {
      "number": "§ 19.",
      "title": "Befangenheit und Interessenkonflikt",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Besteht bei einem Richter, Staatsanwalt oder Beamten ein persönliches oder dienstliches Interesse am Ausgang eines Verfahrens, so hat er dies unverzüglich offenzulegen. (2) In diesem Fall wird ein Vertreter durch die zuständige Stelle bestimmt. (3) Gleiches gilt, wenn der Chief Justice selbst betroffen ist - in diesem Fall übernimmt der Deputy Chief Justice die Leitung. (4) Ein Staatsanwalt kann wegen Besorgnis der Befangenheit von einem Verfahren ausgeschlossen werden, wenn objektive Gründe die Neutralität infrage stellen."
    },
    {
      "number": "§ 20.",
      "title": "Datenschutz und Geheimhaltung",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Gerichtsakten, Ermittlungsunterlagen und Verfahrensdokumente dürfen nur von autorisierten Personen eingesehen werden. (2) Eine Weitergabe an Dritte ist nur mit Genehmigung durch die zuständige Stelle oder gerichtliche Anordnung möglich. (3) Verstöße gegen die Geheimhaltungspflicht werden mit Disziplinarmaßnahmen oder strafrechtlichen Folgen geahndet."
    },
    {
      "number": "§ 21.",
      "title": "Disziplinarordnung",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Beamte, Richter oder Staatsanwälte, die ihre Dienstpflichten verletzen, können disziplinarisch belangt werden. (2) Disziplinarmaßnahmen sind insbesondere: a) schriftlicher Verweis, b) Amtsenthebung, c) Geldbuße bis zu 200.000 $, d) Suspendierung bis zu 2 Monate. (3) Über die Maßnahme entscheidet der Chief Justice nach Anhörung des Betroffenen."
    },
    {
      "number": "§ 22.",
      "title": "Berufseid und Verpflichtung",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Vor Amtsantritt haben Richter und Staatsanwälte einen Eid zu leisten. (2) Der Eid ist in einer schriftlichen Niederschrift festzuhalten und in der Personalakte zu archivieren."
    },
    {
      "number": "§ 23.",
      "title": "Bürgerbeschwerden und Kontrollen",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Jeder Bürger hat das Recht, beim Department of Justice schriftlich Beschwerde über das Verhalten eines Justizbediensteten einzulegen. (2) Beschwerden sind in angemessener Frist, in der Regel innerhalb von 14 Tagen zu prüfen. (3) Das Ergebnis ist dem Beschwerdeführer schriftlich mitzuteilen. (4) Bei Verdacht auf Pflichtverletzung ist unverzüglich ein Disziplinarverfahren einzuleiten."
    },
    {
      "number": "§ 24.",
      "title": "Aufsicht über das Department of Justice",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Die Aufsicht und Kontrolle erfolgt gemäß Artikel 28 der Verfassung durch den San Andreas Congress. (2) Die Mitglieder sind unabhängig in ihrer Tätigkeit und ausschließlich dem Gesetz verpflichtet. (3) Entscheidungen des San Andreas Congress werden mit einfacher Mehrheit getroffen. (4) Der San Andreas Congress ist befugt, sämtliche abgeschlossenen Verfahren sowie Maßnahmen des Department of Justice auf Rechtsfehler, Verhältnismäßigkeit und möglichen Missbrauch zu prüfen. (5) Die Ergebnisse der Prüfung sind in einem Bericht zu dokumentieren und der Regierung vorzulegen."
    },
    {
      "number": "§ 25.",
      "title": "Sicherheitsfreigaben",
      "chapter": {
        "number": "IV.",
        "title": "Allgemeines"
      },
      "text": "(1) Mitarbeiter des Staates in herausgehobenen oder leitenden Funktionen dürfen eine Sicherheitsfreigabe für den Zugang zu sicherheitsempfindlichen Informationssystemen nur erhalten, wenn diese durch die zu freigebende Behörde bestätigt wurde. (2) Abweichend von Absatz 1 können Personen, die in ein Programm zum Schutz von Zeugen aufgenommen wurden, eine entsprechende Sicherheitsfreigabe erhalten, sofern diese im Einzelfall durch das zuständige Gericht genehmigt wurde. (3) Sicherheitsfreigaben, die ohne die erforderliche Bestätigung nach den Absätzen 1 bis 2 erteilt wurden, sind unwirksam."
    }
  ]
}
];

const normalize = (value = "") => value
  .toLocaleLowerCase("de-DE")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/ß/g, "ss");

function getAllSections() {
  return laws.flatMap(law => law.sections.map(section => ({ law, section })));
}

function searchLaws(query, lawId = "all") {
  const q = normalize(query.trim());
  const source = lawId === "all" ? laws : laws.filter(law => law.id === lawId);
  if (!q) return source.flatMap(law => law.sections.map(section => ({ law, section })));
  return source.flatMap(law => law.sections
    .filter(section => normalize([law.title, law.category, section.number, section.title, section.text].join(" ")).includes(q))
    .map(section => ({ law, section }))
  );
}

function findLaw(id) { return laws.find(law => law.id === id) || null; }

function findSection(lawId, sectionNumber) {
  const law = findLaw(lawId);
  if (!law) return null;
  const n = normalize(sectionNumber).replace(/§/g, "").replace(/artikel/g, "").trim();
  return law.sections.find(section => normalize(section.number).replace(/§/g, "").replace(/artikel/g, "").trim() === n) || null;
}

/* =========================================================
   UI / ARCHIVE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => document.getElementById(id);

    const elements = {
        search: $("lawSearch"),
        navigation: $("lawNavigation"),
        cards: $("lawCards"),
        lawCount: $("lawCount"),

        overview: $("lawOverview"),
        searchResults: $("searchResults"),
        resultsList: $("resultsList"),
        searchTitle: $("searchTitle"),
        clearSearch: $("clearSearch"),

        lawView: $("lawView"),
        lawCategory: $("lawCategory"),
        lawTitle: $("lawTitle"),
        lawDescription: $("lawDescription"),
        lawSections: $("lawSections"),
        breadcrumbLaw: $("breadcrumbLaw"),
        backToOverview: $("backToOverview"),

        sectionView: $("sectionView"),
        sectionLawName: $("sectionLawName"),
        sectionNumber: $("sectionNumber"),
        sectionTitle: $("sectionTitle"),
        sectionText: $("sectionText"),
        sectionBreadcrumb: $("sectionBreadcrumb"),
        backToLaw: $("backToLaw"),

        mobileMenu: $("mobileMenu"),
        sidebar: $("sidebar")
    };

    let currentLawId = null;

    const escapeHtml = (value = "") => String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const textToHtml = (value = "") => {
        const escaped = escapeHtml(value.trim());

        // Preserve numbered paragraphs such as "(1)", "(2)" as readable blocks.
        const parts = escaped
            .split(/\s(?=\(\d+\)\s)/g)
            .filter(Boolean);

        return parts.length
            ? parts.map(part => `<p>${part}</p>`).join("")
            : "<p>Kein Gesetzestext vorhanden.</p>";
    };

    const closeMobileMenu = () => {
        elements.sidebar?.classList.remove("open");
    };

    const showOnly = (view) => {
        elements.overview?.classList.toggle("hidden", view !== "overview");
        elements.searchResults?.classList.toggle("hidden", view !== "search");
        elements.lawView?.classList.toggle("hidden", view !== "law");
        elements.sectionView?.classList.toggle("hidden", view !== "section");
    };

    const getLawLabel = (law) => {
        const labels = {
            constitution: "Verfassung",
            civil: "Civil Code",
            penal: "Penal Code",
            narcotics: "Narcotics Act",
            border: "Border Control",
            armament: "Armament Code",
            traffic: "Traffic & Vehicle"
        };

        return labels[law.id] || law.title;
    };

    function renderNavigation(activeId = null) {
        if (!elements.navigation) return;

        elements.navigation.innerHTML = `
            <button class="law-nav-item ${activeId === null ? "active" : ""}" data-law-id="all" type="button">
                <span class="nav-icon">▦</span>
                <span>Alle Gesetze</span>
            </button>
            ${laws.map(law => `
                <button
                    class="law-nav-item ${activeId === law.id ? "active" : ""}"
                    data-law-id="${escapeHtml(law.id)}"
                    type="button"
                >
                    <span class="nav-icon">◇</span>
                    <span>${escapeHtml(getLawLabel(law))}</span>
                </button>
            `).join("")}
        `;

        elements.navigation.querySelectorAll("[data-law-id]").forEach(button => {
            button.addEventListener("click", () => {
                const id = button.dataset.lawId;

                if (id === "all") {
                    showOverview();
                } else {
                    showLaw(id);
                }

                closeMobileMenu();
            });
        });
    }

    function renderCards() {
        if (!elements.cards) return;

        elements.cards.innerHTML = laws.map((law, index) => {
            const firstSection = law.sections[0];
            const description = firstSection?.chapter?.title
                ? firstSection.chapter.title
                : `${law.sections.length} ${law.sections.length === 1 ? "Eintrag" : "Einträge"}`;

            return `
                <article class="law-card" data-law-card="${escapeHtml(law.id)}">
                    <span class="law-card-number">${String(index + 1).padStart(2, "0")} · ${escapeHtml(law.category)}</span>
                    <h3>${escapeHtml(getLawLabel(law))}</h3>
                    <p>${escapeHtml(description)}</p>
                    <span class="law-card-arrow">›</span>
                </article>
            `;
        }).join("");

        elements.cards.querySelectorAll("[data-law-card]").forEach(card => {
            card.addEventListener("click", () => showLaw(card.dataset.lawCard));
        });
    }

    function renderCount() {
        if (!elements.lawCount) return;

        const total = laws.reduce((sum, law) => sum + law.sections.length, 0);
        elements.lawCount.textContent = `${total} Einträge`;
    }

    function renderLaw(law) {
        if (!law || !elements.lawSections) return;

        currentLawId = law.id;

        elements.lawCategory.textContent = law.category || "S.A. STATE GOVERNMENT";
        elements.lawTitle.textContent = law.title;
        elements.breadcrumbLaw.textContent = law.title;

        const chapterNames = [...new Set(
            law.sections
                .map(section => section.chapter?.title)
                .filter(Boolean)
        )];

        elements.lawDescription.textContent = chapterNames.length
            ? chapterNames.join(" · ")
            : `${law.sections.length} Einträge im Gesetzbuch`;

        elements.lawSections.innerHTML = law.sections.map((section, index) => {
            const title = section.title?.trim()
                || section.chapter?.title
                || "Gesetzesbestimmung";

            return `
                <article class="law-section">
                    <button
                        type="button"
                        data-section-index="${index}"
                    >
                        <span class="section-number-small">${escapeHtml(section.number)}</span>
                        <span class="section-title-small">${escapeHtml(title)}</span>
                        <span class="section-arrow">›</span>
                    </button>
                </article>
            `;
        }).join("");

        elements.lawSections.querySelectorAll("[data-section-index]").forEach(button => {
            button.addEventListener("click", () => {
                showSection(law.id, Number(button.dataset.sectionIndex));
            });
        });
    }

    function showOverview() {
        currentLawId = null;

        showOnly("overview");
        renderNavigation(null);

        if (elements.search) {
            elements.search.value = "";
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showLaw(lawId) {
        const law = findLaw(lawId);
        if (!law) return;

        if (elements.search) {
            elements.search.value = "";
        }

        showOnly("law");
        renderNavigation(law.id);
        renderLaw(law);

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function showSection(lawId, sectionIndex) {
        const law = findLaw(lawId);
        if (!law) return;

        const section = law.sections[sectionIndex];
        if (!section) return;

        currentLawId = law.id;

        const title = section.title?.trim()
            || section.chapter?.title
            || "Gesetzesbestimmung";

        elements.sectionLawName.textContent = law.title;
        elements.sectionNumber.textContent = section.number;
        elements.sectionTitle.textContent = title;
        elements.sectionBreadcrumb.textContent = section.number;
        elements.sectionText.innerHTML = textToHtml(section.text);

        showOnly("section");
        renderNavigation(law.id);

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openSearchResult(result) {
        const law = result.law;
        const index = law.sections.indexOf(result.section);

        if (index >= 0) {
            showSection(law.id, index);
        }
    }

    function renderSearch(query) {
        const results = searchLaws(query);

        showOnly("search");

        if (elements.searchTitle) {
            elements.searchTitle.textContent =
                `${results.length} ${results.length === 1 ? "Treffer" : "Treffer"}`;
        }

        if (!elements.resultsList) return;

        if (!results.length) {
            elements.resultsList.innerHTML = `
                <div class="no-results">
                    Keine passenden Gesetzesstellen gefunden.
                </div>
            `;
            return;
        }

        elements.resultsList.innerHTML = results.map((result, index) => {
            const title = result.section.title?.trim()
                || result.section.chapter?.title
                || "Gesetzesbestimmung";

            const preview = result.section.text.length > 220
                ? `${result.section.text.slice(0, 220).trim()}…`
                : result.section.text;

            return `
                <article class="search-result" data-result-index="${index}">
                    <div class="search-result-law">
                        ${escapeHtml(result.law.title)}
                    </div>

                    <h3>
                        ${escapeHtml(result.section.number)}
                        · ${escapeHtml(title)}
                    </h3>

                    <p>${escapeHtml(preview)}</p>
                </article>
            `;
        }).join("");

        elements.resultsList.querySelectorAll("[data-result-index]").forEach(item => {
            item.addEventListener("click", () => {
                const result = results[Number(item.dataset.resultIndex)];
                openSearchResult(result);
            });
        });

        renderNavigation(null);
    }

    function runSearch() {
        const query = elements.search?.value.trim() || "";

        if (!query) {
            showOverview();
            return;
        }

        renderSearch(query);
    }

    // Search while typing.
    elements.search?.addEventListener("input", runSearch);

    // Clear search.
    elements.clearSearch?.addEventListener("click", showOverview);

    // Back buttons.
    elements.backToOverview?.addEventListener("click", showOverview);

    elements.backToLaw?.addEventListener("click", () => {
        if (currentLawId) {
            showLaw(currentLawId);
        } else {
            showOverview();
        }
    });

    // CTRL + K focuses the search.
    document.addEventListener("keydown", event => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            event.preventDefault();
            elements.search?.focus();
        }

        if (event.key === "Escape" && document.activeElement === elements.search) {
            elements.search.value = "";
            showOverview();
        }
    });

    // Mobile menu.
    elements.mobileMenu?.addEventListener("click", () => {
        elements.sidebar?.classList.toggle("open");
    });

    // Initial render.
    renderNavigation(null);
    renderCards();
    renderCount();
    showOnly("overview");

    // Public helpers for debugging / future UI extensions.
    window.SVLawsUI = {
        showOverview,
        showLaw,
        showSection,
        runSearch
    };
});


window.SVLaws = {
    laws,
    normalize,
    getAllSections,
    searchLaws,
    findLaw,
    findSection
};
