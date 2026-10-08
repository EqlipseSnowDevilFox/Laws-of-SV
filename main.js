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
  const raw = String(query ?? "").trim();
  const q = normalize(raw);
  const source = lawId === "all" ? laws : laws.filter(law => law.id === lawId);

  if (!q) {
    return source.flatMap(law => law.sections.map(section => ({ law, section, score: 0 })));
  }

  // Paragraph/article queries are normalized so that all of these work:
  // "63", "§ 63", "§63", "artikel 18", "Art. 18".
  const numberMatch = q.match(/(?:§|artikel|art\.?|paragraph|par\.?|nr\.?\s*)?\s*(\d+[a-z]?)/i);
  const wantedNumber = numberMatch?.[1] || null;

  const results = [];

  source.forEach(law => {
    law.sections.forEach(section => {
      const number = normalize(section.number);
      const title = normalize(section.title || "");
      const chapter = normalize(section.chapter?.title || "");
      const text = normalize(section.text || "");
      const lawTitle = normalize(law.title);
      const category = normalize(law.category || "");
      const searchable = [lawTitle, category, number, title, chapter, text].join(" ");

      let score = 0;

      if (wantedNumber) {
        const sectionDigits = number.match(/\d+[a-z]?/)?.[0];
        if (sectionDigits === wantedNumber) score += 100;
      }

      if (number === q) score += 80;
      if (title === q) score += 70;
      if (title.includes(q)) score += 45;
      if (chapter.includes(q)) score += 25;
      if (lawTitle.includes(q) || category.includes(q)) score += 20;
      if (text.includes(q)) score += 10;

      if (score > 0 || searchable.includes(q)) {
        results.push({ law, section, score });
      }
    });
  });

  return results.sort((a, b) => b.score - a.score);
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
        localSearch: $("lawLocalSearch"),
        localCount: $("lawLocalCount"),
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
        previousSection: $("previousSection"),
        previousSectionLabel: $("previousSectionLabel"),
        nextSection: $("nextSection"),
        nextSectionLabel: $("nextSectionLabel"),

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

    function renderLaw(law, query = "") {
        if (!law || !elements.lawSections) return;

        currentLawId = law.id;
        elements.lawCategory.textContent = law.category || "S.A. STATE GOVERNMENT";
        elements.lawTitle.textContent = law.title;
        elements.breadcrumbLaw.textContent = law.title;

        const chapterNames = [...new Set(
            law.sections.map(section => section.chapter?.title).filter(Boolean)
        )];

        elements.lawDescription.textContent = chapterNames.length
            ? chapterNames.join(" · ")
            : `${law.sections.length} Einträge im Gesetzbuch`;

        const results = query.trim()
            ? searchLaws(query, law.id)
            : law.sections.map(section => ({ law, section, score: 0 }));

        if (elements.localCount) {
            elements.localCount.textContent = query.trim()
                ? `${results.length} ${results.length === 1 ? "Treffer" : "Treffer"}`
                : `${law.sections.length} Einträge`;
        }

        if (!results.length) {
            elements.lawSections.innerHTML = `
                <div class="no-results law-no-results">
                    Keine passenden Gesetzesstellen in diesem Gesetzbuch gefunden.
                </div>
            `;
            return;
        }

        let previousChapter = null;
        const markup = [];

        results.forEach(result => {
            const section = result.section;
            const index = law.sections.indexOf(section);
            const title = section.title?.trim()
                || section.chapter?.title
                || "Gesetzesbestimmung";

            const chapterKey = section.chapter
                ? `${section.chapter.number || ""}|${section.chapter.title || ""}`
                : "";

            if (!query.trim() && chapterKey && chapterKey !== previousChapter) {
                markup.push(`
                    <div class="law-chapter-heading">
                        <span>${escapeHtml(section.chapter.number || "")}</span>
                        <strong>${escapeHtml(section.chapter.title || "")}</strong>
                    </div>
                `);
                previousChapter = chapterKey;
            }

            markup.push(`
                <article class="law-section">
                    <button type="button" data-section-index="${index}">
                        <span class="section-number-small">${escapeHtml(section.number)}</span>
                        <span class="section-title-small">${escapeHtml(title)}</span>
                        <span class="section-arrow">›</span>
                    </button>
                </article>
            `);
        });

        elements.lawSections.innerHTML = markup.join("");

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

        const previous = law.sections[sectionIndex - 1];
        const next = law.sections[sectionIndex + 1];

        if (elements.previousSection) {
            elements.previousSection.disabled = !previous;
            elements.previousSectionLabel.textContent = previous
                ? previous.number
                : "—";
            elements.previousSection.onclick = previous
                ? () => showSection(law.id, sectionIndex - 1)
                : null;
        }

        if (elements.nextSection) {
            elements.nextSection.disabled = !next;
            elements.nextSectionLabel.textContent = next
                ? next.number
                : "—";
            elements.nextSection.onclick = next
                ? () => showSection(law.id, sectionIndex + 1)
                : null;
        }

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
                        <span>${escapeHtml(result.law.category || "S.A. STATE GOVERNMENT")}</span>
                        <strong>${escapeHtml(result.law.title)}</strong>
                    </div>

                    <h3>
                        ${escapeHtml(result.section.number)}
                        · ${escapeHtml(title)}
                    </h3>

                    <p>${escapeHtml(preview)}</p>

                    <span class="search-result-action">Gesetzesstelle öffnen&nbsp; ›</span>
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

    // Search inside the currently opened law book.
    elements.localSearch?.addEventListener("input", () => {
        if (!currentLawId) return;
        const law = findLaw(currentLawId);
        if (law) renderLaw(law, elements.localSearch.value);
    });

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
