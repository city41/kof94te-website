import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import charSelectPng from "./charSelect.png";
import cpuCustomTeamsPng from "./cpuCustomTeams.png";
import charSelectOldPng from "./charSelectOld.png";
import charSelectA94Png from "./charSelect_a94.png";
import orderSelectPng from "./orderSelect.png";
import gameplayPng from "./gameplay.png";
import fightAgainstRugalPng from "./fightAgainstRugal.png";
import winScreenPng from "./winScreen.png";
import continueScreenPng from "./continueScreen.png";
import gameOverPng from "./gameOver.png";
import cutscene2Png from "./cutscene2.png";
import usaEndingPng from "./usaEnding.png";
import versionStringPng from "./titleScreenWithVersion.png";
import realCartJpg from "./realCart.jpg";
import p1ChangedJpg from "./p1Changed.jpg";
import hereComesChallengePng from "./hereComesChallenge.png";

import rugalTurnongOnDebugDipPng from "./rugalTurningOnDebugDip.png";
import rugalFocusedPng from "./rugalFocused.png";
import rugalPickFullFormPng from "./rugalPickFullForm.png";

import styles from "./IndexPage.module.css";

function Hr() {
  return <div className="border-b-2 border-gray-600 my-8 -mx-8"></div>;
}

function IndexPage() {
  return (
    <div className={clsx(styles.root, "w-full sm:py-16")}>
      <div
        className={clsx(
          styles.pageContainer,
          "mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 lg:shadow-2xl lg:rounded-2xl"
        )}
      >
        <ul
          className={clsx(
            styles.topMenu,
            "-mx-8 sm:pb-2 h-28 sm:h-auto px-4 pt-4 flex flex-col flex-wrap sm:flex-row items-start sm:items-center justify-start space-y-2 sm:space-y-0 sm:space-x-5 sm:place-content-between sm:px-16 border-b sticky top-0"
          )}
        >
          <li>
            <a className="menu-item" href="#release-notes">
              Release Notes
            </a>
          </li>
          <li>
            <a className="menu-item" href="#build-the-rom">
              Build the ROM
            </a>
          </li>
          <li>
            <a className="menu-item" href="#tips">
              Tips
            </a>
          </li>
          <li>
            <a className="menu-item" href="#real-cart">
              Real Cartridge
            </a>
          </li>
          <li>
            <a className="menu-item" href="https://github.com/city41/kof94te">
              GitHub
            </a>
          </li>
          <li>
            <a className="menu-item" href="https://discord.gg/tvm4fpkUNq">
              Discord
            </a>
          </li>
        </ul>
        <div className="grid grid-cols-8 gap-8 auto-rows-min px-8 sm:px-0 mb-8">
          <div className="col-start-1 col-end-9 sm:col-start-1 sm:col-end-5 grid place-items-center">
            <div className="flex flex-col h-full mt-16 gap-y-4">
              <h1 className="font-bold text-3xl sm:text-4xl text-center">
                King of Fighters &apos;94: Team Edit Edition
              </h1>
              <div className="flex flex-col space-y-8 my-8 pt-8">
                <p>
                  KOF94TE is a ROM hack for the Neo Geo game King of Fighters
                  &apos;94
                </p>
                <p>
                  All King of Fighters games allow you to pick a custom team of
                  three characters ... except King of Fighters &apos;94. This
                  hack adds in the team edit feature. Finally Choi, Mai and
                  Heidern can fight together!
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
          <div className="col-start-1 col-end-9 sm:h-auto sm:col-start-5 sm:col-end-9 self-stretch flex flex-col gap-y-4 py-4 items-center">
            <Image
              className="shadow-xl"
              src={charSelectPng.src}
              width={charSelectPng.width}
              height={charSelectPng.height}
              alt="Character select screen"
              priority
            />
            <p>
              A full on character select screen modeled after KOF95, and with
              two types of random select.
            </p>
            <Image
              className="shadow-xl"
              src={cpuCustomTeamsPng.src}
              width={cpuCustomTeamsPng.width}
              height={cpuCustomTeamsPng.height}
              alt="CPU using custom teams"
              priority
            />
            <p>The CPU can choose custom teams too.</p>
            <Image
              className="shadow-xl"
              src={charSelectA94Png.src}
              width={charSelectA94Png.width}
              height={charSelectA94Png.height}
              alt="Optional KOF94 style avatars."
              priority
            />
            <p>Optional KOF94 style avatars.</p>
            <Image
              className="shadow-xl"
              src={orderSelectPng.src}
              width={orderSelectPng.width}
              height={orderSelectPng.height}
              alt="Member order select screen"
            />
            <p>Order select screen same as before</p>
            <Image
              className="shadow-xl"
              src={gameplayPng.src}
              width={gameplayPng.width}
              height={gameplayPng.height}
              alt="Game play"
            />
            <p>Custom teams in gameplay</p>
            <Image
              className="shadow-xl"
              src={cutscene2Png.src}
              width={cutscene2Png.width}
              height={cutscene2Png.height}
              alt="Cutscene"
            />
            <p>Custom teams in cutscenes</p>
            <Image
              className="shadow-xl"
              src={fightAgainstRugalPng.src}
              width={fightAgainstRugalPng.width}
              height={fightAgainstRugalPng.height}
              alt="Fight against Rugal"
            />
            <p>Custom teams fighting Rugal</p>
            <Image
              className="shadow-xl"
              src={winScreenPng.src}
              width={winScreenPng.width}
              height={winScreenPng.height}
              alt="Win screen"
            />
            <p>Win screens show the custom team that won</p>
            <Image
              className="shadow-xl"
              src={continueScreenPng.src}
              width={continueScreenPng.width}
              height={continueScreenPng.height}
              alt="Continue screen"
            />
            <p>Continue screens show the custom team that lost</p>
            <Image
              className="shadow-xl"
              src={gameOverPng.src}
              width={gameOverPng.width}
              height={gameOverPng.height}
              alt="Game over screen"
            />
            <p>Custom team on the game over screen</p>
            <Image
              className="shadow-xl"
              src={usaEndingPng.src}
              width={usaEndingPng.width}
              height={usaEndingPng.height}
              alt="Ending"
            />
            <p>Surprising new endings</p>
          </div>
        </div>
        <div className={styles.headerWithPadding} id="release-notes">
          <h2 className={styles.pageHeader}>Release Notes</h2>
        </div>
        <div className="mb-16">
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.4.2</h3>
          <p>Fixes a character colors bug when losing to Rugal.</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              <b>Bug fix:</b> If you lost to Rugal in the boss fight, and you
              chose alternate colors for your character who lost, they would be
              shown in the falling sequence and on the continue screen with
              their main colors. This is now fixed. Thanks to Leonard and
              Goenitz for finding this.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <p>
            Graphical glitches can occur when playing on real hardware with a
            NeoSD or the Darksoft multi. This is due to limitations in these
            carts. The original KOF94 game played on these carts has the same
            graphical glitches.
          </p>
          <p className=" mt-4 bg-green-200 border-green-700 border px-4 py-2 my-4">
            <b>This can now be fixed</b> with{" "}
            <a href="https://neorh.mattgreer.dev/kof94/slofix">this patch</a>.
            Thanks to paulb-nl for the fix.
          </p>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.4.1</h3>
          <p>Fixes a Rugal debug dip bug.</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              <b>Bug fix:</b> When choosing Rugal as your team via the debug
              dip, all sound from then on would stop working. That is now fixed.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <p>
            Graphical glitches can occur when playing on real hardware with a
            NeoSD or the Darksoft multi. This is due to limitations in these
            carts. The original KOF94 game played on these carts has the same
            graphical glitches.
          </p>
          <p className=" mt-4 bg-green-200 border-green-700 border px-4 py-2 my-4">
            <b>This can now be fixed</b> with{" "}
            <a href="https://neorh.mattgreer.dev/kof94/slofix">this patch</a>.
            Thanks to paulb-nl for the fix.
          </p>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.4.0</h3>
          <p>
            The original purpose of this release was to address the lagginess on
            the MiSTer. It also got a lot of bug fixes and a lot of polish. Even
            if you don&apos;t play on a MiSTer, this version is highly
            recommended.
          </p>
          <p className="bg-green-200 border-green-700 border px-4 py-2 my-4">
            <b>This is the final planned release.</b> There will be no more
            features added to the hack. The only way there will be more releases
            beyond this one is if a bug is found. Even then, a judgment call
            will be made on how bad the bug is.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              All laginess and graphical glitches on the MiSTer are resolved. It
              plays on the MiSTer beautifully now.
            </li>
            <li>
              A new scaling and sliding transition when going from character
              select to order select. Similar to KOF95&apos;s (but not exactly
              the same).
            </li>
            <li>Player and CPU cursor tweaks and polish.</li>
            <li>
              When the CPU is using non-custom teams, the way it selects its
              team is now similar to how KOF95 does it.
            </li>
            <li>
              <b>Bug fix:</b> when using KOF95/98 avatars on the character
              select screen, team USA had the wrong colors. They are now
              correct.
            </li>
            <li>
              <b>Bug fix: </b>when choosing team random select, the
              &quot;choice&quot; sound effect would not play. It now does.
            </li>
            <li>
              <b>Bug fix: </b>when playing on player one side, against the cpu,
              using cpu custom teams, and then continuing, the cpu characters
              would be flipped. That is now fixed.
            </li>
            <li>
              <b>Bug fix: </b>when winning the game on the player 2 side, the
              wrong team member would speak during certain cutscenes. That is
              now fixed.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <p>
            Graphical glitches can occur when playing on real hardware with a
            NeoSD or the Darksoft multi. This is due to limitations in these
            carts. The original KOF94 game played on these carts has the same
            graphical glitches. There is no way to fix this.
          </p>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.3.0</h3>
          <p>
            This version brings in KOF94 style avatars, made by Bunny-Head. To
            get them, choose them in the optional add-ons section when building
            the ROM. Thanks to Bunny-Head for the great work!
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>KOF94 style avatars add-on.</li>
            <li>The hack&apos;s version is now on the title screen.</li>
            <li>
              <b>Bug fix:</b> When choosing a character, the choice confirmation
              sound effect would not play. That is now fixed.
            </li>
            <li>
              <b>Bug fix:</b> Fixed some graphical issues in Raine and Kawaks.
              Thanks to zelurker for the fix.
            </li>
            <li>
              <b>Bug fix:</b> Character select screen was so laggy on MiSTer as
              to be unplayable. That is now fixed. But also see known issues
              just below.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <p>
            Minor graphical glitching can happen on real hardware and the
            MiSTer. This has always been true since day one of the hack. More
            info{" "}
            <a href="https://github.com/city41/kof94te/issues/134/">
              at GitHub.
            </a>{" "}
          </p>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.2.4</h3>
          <p>Fixes an obscure but pretty annoying bug.</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              <b>Bug fix:</b> If the player chose character random select with
              all three characters random, and the CPU was using custom teams,
              sometimes during a play through the player would end up fighting
              the same team twice.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <p>No known issues.</p>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.2.2</h3>
          <p>One minor bug slipped through :(</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              <b>Bug fix:</b> a CPU character&apos;s colors could be wrong
              sometimes in the chosen avatar section (down at the bottom of the
              character select screen). This is a very minor bug, the colors are
              correct during game play.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <p>No known issues.</p>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.2.1</h3>
          <p>
            A <b className="text-2xl">big</b> release with lots of changes.
            Thanks to all who helped test this.
          </p>
          <p className="mt-4">
            CPU custom teams really freshen up the single player experience!
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              CPU custom teams, <a href="#cpu-custom-teams">more info here</a>.
            </li>
            <li>
              The new endings have been translated into Japanese. The hack now
              fully works in all supported languages.
            </li>
            <li>
              The CPU cursors are now using the same colors as KOF95. They were
              close before, but slightly off.
            </li>
            <li>
              Rugal is no longer shown on the character select screen before you
              fight him. This is to match what KOF95 does.
            </li>
            <li>
              When continuing, the CPU cursor now matches what KOF95 does.
            </li>
            <li>
              To see the version string, you now need to hold P1 start and P2
              start together.
            </li>
            <li>
              Win quotes have been redone. They used to be mostly correct, now
              they are always correct.
            </li>
            <li className="mt-4">
              <b>Bug fix:</b> Cross continuing now works. This actually never
              worked from day one and was a really bad bug! Cross continuing is
              when player one loses, then player two continues (or vice versa).
            </li>
            <li>
              <b>Bug fix:</b> Rugal&apos;s avatar no longer shows up at
              incorrect times.
            </li>
            <li>
              <b>Bug fix:</b> Ryo&apos;s last name was misspelled. That is now
              fixed.
            </li>
            <li>
              <b>Bug fix:</b> The &quot;HERE COMES CHALLENGER&quot; graphic no
              longer causes names to get cut off in a strange way.
            </li>
            <li>
              <b>Bug fix:</b> &quot;HERE COMES CHALLENGER&quot; no longer has
              missing tiles in AES mode.
            </li>
            <li>
              <b>Bug fix:</b> A tiny fix in Team Japan&apos;s ending when
              Spanish is set as the language.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <p>No known issues.</p>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.1.9</h3>
          <p>
            Lots of bug fixes. I moved out of beta too quickly, sorry about
            that. But everything is looking much better.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              Bug fix: Random select would stop working after the second fight
              in single player mode.
            </li>
            <li>Bug fix: The CPU cursor sound effect went away.</li>
            <li>Bug fix: demo mode had numerous issues, all are fixed.</li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
              <br />
              <b>UPDATE: Japanese translations are now under way!</b>
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.1.8</h3>
          <p>Three very minor bugs fixed.</p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              Bug fix: Character select screen: Takuma could get his alternate
              colors unexpectedly in certain situations in versus mode.
            </li>
            <li>
              Bug fix: Player cursors start in wrong spot and very quickly jump
            </li>
            <li>
              Bug fix: dont allow players to do anything in character select
              while HERE COMES CHALLENGER is on the screen.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.1.5</h3>
          <p>
            A minor versus mode bug was fixed. Thanks to Psycho RFG for finding
            it.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>
              In versus mode, if one player chooses their whole team, they could
              still cause cursor movement sound effects to happen. That is now
              fixed.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.1.4</h3>
          <p>
            A cleaner and better looking character select screen. The globe and
            logo were removed, it now looks more like KOF95.
          </p>
          <div>
            <div className="flex flex-row flex-wrap justify-around my-8">
              <Image
                className="shadow-xl"
                src={charSelectOldPng.src}
                width={charSelectOldPng.width}
                height={charSelectOldPng.height}
                alt="The old character select screen"
              />
              <Image
                className="shadow-xl"
                src={charSelectPng.src}
                width={charSelectPng.width}
                height={charSelectPng.height}
                alt="The new character select screen"
              />
            </div>
          </div>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>Cleaner character select screen.</li>
            <li>
              Bug fix: when continuing, show who the cpu team is in the
              character select screen.
            </li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
          <h3 className="heading text-lg font-bold pb-4">Version 1.0.0</h3>
          <p>
            The hack is complete. The only exception is the new endings play in
            English when the game is set to Japanese. If anyone can help
            translate them, please let me know.
          </p>
          <h4 className="heading font-bold py-4">Changes</h4>
          <ul className="list-disc ml-4">
            <li>Fix issue where Kawaks would have sprite corruption.</li>
            <li>Added a missing period to the USA ending.</li>
          </ul>
          <h4 className="heading font-bold py-4">Known Issues</h4>
          <ul className="list-disc ml-4">
            <li>
              The new endings are in English when playing with language set to
              Japanese. Also any of these endings that have a period in them,
              the period shows up with an orange background. That is because the
              period is actually Chin&apos;s wine bottle :) Since periods are
              not used in Japanese, the game does not load the palette that is
              needed. I could fix this, but since the endings need to be
              translated anyway, I&apos;m not going to bother.
            </li>
          </ul>
          <Hr />
        </div>
        <div className={styles.headerWithPadding} id="build-the-rom">
          <h2 className={styles.pageHeader}>Build the ROM</h2>
        </div>
        <p>
          The ROM can be built at the{" "}
          <a href="https://neorh.mattgreer.dev/kof94">Neo Rom Hack website</a>.
        </p>
        <Hr />
        <div className={styles.headerWithPadding} id="tips">
          <h2 className={styles.pageHeader}>Tips</h2>
          <ul className="list-disc ml-4 mb-8 mt-2">
            <li>
              The version of the hack is on the title screen. Please include it
              when reporting a bug. Bugs can be reported at{" "}
              <a href="https://github.com/city41/kof94te/issues">Github</a> or{" "}
              <a href="https://discord.gg/Uuaka5mq">Discord</a>.
              <Image
                className="shadow-xl my-4"
                src={versionStringPng.src}
                width={versionStringPng.width}
                height={versionStringPng.height}
                alt="Version when hoding start"
              />
            </li>
            <li>
              The character select screen has no time limit. The order select
              screen has the same time limit as the original game.
            </li>
            <li>
              In versus mode the stage you fight on is always randomly selected.
              This is also true when the CPU uses custom teams.
            </li>
            <li>
              In versus mode both players can choose a new team on the next
              match.
            </li>
            <li>
              Random team select will wipe out any previous characters you have
              chosen.
            </li>
            <li>
              In single player mode, if you choose one of the original 8 teams,
              you will get that team&apos;s cutscenes and ending. This will also
              cause the CPU to stick with original 8 teams too{" "}
              <a href="#cpu-custom-teams">unless you override that</a>.
            </li>
            <li>
              When choosing an original team (ie, the teams from the original
              game), it does not matter what order you select. So Terry/Andy/Joe
              is Team Italy, and so is Andy/Joe/Terry, for example.
            </li>
          </ul>
          <h3 className="text-lg font-bold">Using Rugal</h3>
          <p className="my-4">
            Rugal is accessible via debug dip 1-4. This is almost identical to
            how the original game works.
          </p>
          <Image
            className="shadow-xl"
            src={rugalTurnongOnDebugDipPng.src}
            width={rugalTurnongOnDebugDipPng.width}
            height={rugalTurnongOnDebugDipPng.height}
            alt="Turning on debug dip 1-4"
          />
          <p className="my-4">First, turn on debug dip 1-4.</p>
          <Image
            className="shadow-xl"
            src={rugalFocusedPng.src}
            width={rugalFocusedPng.width}
            height={rugalFocusedPng.height}
            alt="Rugal focused in the character select screen"
          />
          <p className="my-4">
            Then choose him as your character. You can get his alternate palette
            by choosing him with C or D.
          </p>
          <Image
            className="shadow-xl"
            src={rugalPickFullFormPng.src}
            width={rugalPickFullFormPng.width}
            height={rugalPickFullFormPng.height}
            alt="Picking full form Rugal in the order select screen"
          />
          <p className="my-4">
            To get regular Rugal, choose him with A in the order select screen.
            To get second form Rugal, push right or left until Rugal stops
            moving.
          </p>
          <p className="my-4">
            Once he is chosen, turn off debug dip 1-4, otherwise both characters
            will be invincible in the fight.
          </p>
          <p>
            In a single player game, using Rugal will crash the game if you make
            it to the Rugal fight. This is true in the original game too.
          </p>
          <h4 className="font-bold my-4">
            Why isn&apos;t Rugal a normal character?
          </h4>
          <p>
            In the original game, Rugal is only accessible via the same debug
            dip. I decided to take that route with the hack as well. It boils
            down to he&apos;s just the boss and missing things needed to be a
            full fledged character:
          </p>
          <ul className="list-disc ml-4 mt-4">
            <li>His normal form has no specials, DMs, or even a throw.</li>
            <li>
              He has no charging animation in his normal form. Pressing ABC just
              makes him disappear.
            </li>
            <li>He can&apos;t be setup on the continue screen.</li>
            <li>He corrupts palettes in his full form.</li>
            <li>
              His transformation cutscene runs after defeating his first form.
            </li>
            <li>
              He does a ton of damage and takes little damage. Using him in
              versus mode matches is pretty lame.
            </li>
          </ul>
          <h3
            className={clsx(
              styles.headerWithPadding,
              "text-lg font-bold mt-16"
            )}
            id="cpu-custom-teams"
          >
            CPU Custom Teams
          </h3>
          <p className="my-4">
            Like most KOF games, the CPU can now choose a custom team with this
            hack. That means the CPU&apos;s team can be formed out of any of the
            24 characters, just like a player&apos;s team.
          </p>
          <Image
            className="shadow-xl"
            src={cpuCustomTeamsPng.src}
            width={cpuCustomTeamsPng.width}
            height={cpuCustomTeamsPng.height}
            alt="CPU using custom teams"
          />
          <p className="mt-8">Here are the guidelines</p>
          <ul className="list-disc ml-4 mt-4">
            <li>
              If you choose an original 8 team (the teams in the original game),
              then the CPU will also stick to original teams. You will also get
              the original team&apos;s cutscenes and ending. So when you choose
              an original team, the hack reverts entirely back to vanilla KOF94.
            </li>
            <li>
              If you choose a custom team, there is roughly a 62% chance the CPU
              will stick with original teams.
            </li>
            <li>
              When starting a new game, you can hold C while pressing start to
              force the CPU to use custom teams. If you do it correctly, you
              will hear &quot;go red!&quot;. This means the CPU will always use
              custom teams, even if you choose an original 8 team.
            </li>
            <li>
              When starting a new game, you can hold D while pressing start to
              force the CPU to use original 8 teams.
            </li>
          </ul>
        </div>
        <Hr />
        <div className={styles.headerWithPadding} id="real-cart">
          <h2 className={styles.pageHeader}>
            Putting KOF94TE onto a real cartridge
          </h2>
          <div className="flex flex-col gap-y-4">
            <p>
              I have put the hack onto a real cartridge. Here are tips if you
              want to do this too.
            </p>
            <p className="bg-red-200 border-red-700 border px-4 py-2">
              <b>Disclaimer:</b> I&apos;m not very experienced with this. The
              info here was taken from{" "}
              <a href="https://neo-geo.com/forums/index.php?threads/putting-a-rom-hack-on-a-real-cart.271549/">
                this thread
              </a>{" "}
              on the Neo Geo forum. Thanks to the forum members who helped with
              this.
            </p>
            <Image
              className="shadow-xl"
              src={realCartJpg.src}
              width={realCartJpg.width}
              height={realCartJpg.height}
              alt="KOF94TE on a real Neo Geo cartridge"
            />
            <h3 className="font-bold text-xl">
              Use a real KOF94 cart as the basis
            </h3>
            <p>
              It is easiest to alter a real KOF94 cart. That way only some of
              the chips need to be changed. You can alter an AES or MVS cart,
              that doesn&apos;t matter. These tips are assuming you are using a
              real KOF94 cart.
            </p>
            <h3 className="font-bold text-xl">Programming the ROM files</h3>
            <p>
              Build the ROM as normal at{" "}
              <a href="https://neorh.mattgreer.dev/kof94">neorh</a>. Choose the
              patches you want, and then download the MAME version of the ROM.
              Once downloaded, unzip the zip file and inside are the ROM files,
              ready to be programmed onto chips.
            </p>
            <p>
              The ROM files are already byte swapped. So they can just be
              programmed straight, as-is. Not all ROM files need to be
              programmed, see the table below.
            </p>
            <p>
              I don&apos;t know anything about EPROM programmers. I had{" "}
              <a href="https://buyicnow.com">buyicnow</a> program my chips for
              me.
            </p>
            <h3 className="font-bold text-xl">The slowdown fix patch</h3>
            <p>
              <a href="https://neorh.mattgreer.dev/kof94/slofix">
                The slowdown fix patch
              </a>{" "}
              is a bit tricky with real carts. Adding it won&apos;t cause any
              harm, but it likely won't have any benefit either.
            </p>
            <p>
              KOF94 uses something called wait cycles. Wait cycles are a way to
              tell the Neo Geo&apos;s main CPU to slow down a little bit. This
              is needed to avoid graphical glitching in the game. The downside
              is this also causes some slowdown in the gameplay. When SNK ported
              KOF94 to the CD system, they fixed the game and removed the need
              for wait cycles. The slowdown fix patch is basically that fix, so
              the cart version no longer needs wait cycles either.
            </p>
            <p>
              This is really beneficial on the MiSTer where wait cycles are
              easily turned off, or on the NeoSD or Darksoft Multi which never
              turn on wait cycles.
            </p>
            <p>
              But wait cycles are turned on by a real cartridge by sending 5
              volts to a few pins on the cartridge port. So even with this patch
              applied, a real KOF94 cart will still have wait cycles turned on
              and thus still be slow. To take advantage of this patch, you
              either need to hack the cart to turn off the 5 volts on those
              pins, something I don&apos;t believe anyone has ever tried. Or use
              an entirely different game as the donor cart and program all of
              the chips. Something I&apos;ve not done nor know anything about.
            </p>
            <h3 className="font-bold text-xl">
              Slowdown on real carts warning
            </h3>
            <p className="bg-red-200 border-red-700 border px-4 py-2">
              The hack runs great on a real cart, except one very minor thing
              does have slowdown and sometimes, minor graphical issues.
            </p>
            <p>
              When on the character select screen, if the other player joins in
              and &quot;HERE COMES CHALLENGER&quot; is shown, there is slowdown
              and that graphic is on the screen a bit longer than on vanilla
              KOF94. Sometimes you can see some very minor graphical garbage at
              the top of the screen during this too. This only happens if the
              other player joins while on the character select screen. Joining
              at any other time works just fine.
            </p>
            <Image
              className="shadow-xl"
              src={hereComesChallengePng.src}
              width={hereComesChallengePng.width}
              height={hereComesChallengePng.height}
              alt="HERE COMES CHALLENGER on the character select screen"
            />
            <p>
              Other than that, the hack fully works on real cart. Everything
              runs at full speed and as expected.
            </p>

            <h3 className="font-bold text-xl">
              Changed ROMs and needed EPROMs
            </h3>
            <p>
              These are the ROMs that need to be programmed, depending on which
              patches you choose. For Team Edit it does not matter if you choose
              the KOF95 or KOF94 portrait version, both are the same here.
            </p>
            <table className="sm:mx-32">
              <tbody>
                <tr>
                  <th className="bg-blue-800 text-white p-1 w-1/3">ROM</th>
                  <th className="bg-blue-800 text-white p-1 w-1/3 border-l border-white">
                    (E)EPROM model
                  </th>
                  <th className="bg-blue-800 text-white p-1 w-1/3 border-l border-white">
                    Needed by
                  </th>
                </tr>
                <tr>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    055-c1.c1
                  </td>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    29f1615
                  </td>
                  <td className="text-bg-deep bg-fg p-1 border-b border-fg-fg">
                    Team Edit and clean font
                  </td>
                </tr>
                <tr>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    055-c2.c2
                  </td>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    29f1615
                  </td>
                  <td className="text-bg-deep bg-fg p-1 border-b border-fg-fg">
                    Team Edit
                  </td>
                </tr>
                <tr>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    055-c7.c7
                  </td>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    29f1615
                  </td>
                  <td className="text-bg-deep bg-fg p-1 border-b border-fg-fg">
                    Team Edit
                  </td>
                </tr>
                <tr>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    055-c8.c8
                  </td>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    29f1615
                  </td>
                  <td className="text-bg-deep bg-fg p-1 border-b border-fg-fg">
                    Team Edit
                  </td>
                </tr>
                <tr>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    055-p1.p1
                  </td>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    29f1615
                  </td>
                  <td className="text-bg-deep bg-fg p-1 border-b border-fg-fg">
                    All except clean font
                  </td>
                </tr>
                <tr>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    055-s1.s1
                  </td>
                  <td className="bg-focal text-bg-fade p-1 border-b border-fg-fg w-1/3">
                    27c1000
                  </td>
                  <td className="text-bg-deep bg-fg p-1 border-b border-fg-fg">
                    Team Edit
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <b>In other words:</b> If you are programming Team Edit onto a
              cart, then the C1,C2,C7,C8,P1 and S1 ROM chips all need to be
              changed. If you choose other add-ons like cheat sheet, they will
              all come along for the ride too.
            </p>
            <h3 className="font-bold text-xl">Changing P1 first</h3>
            <p>
              When soldering in the new ROM chips, you can first only change the
              P1 chip as an initial test if you want.
            </p>
            <p>
              If you do this and run the game, the character select screen will
              look like this:
            </p>
            <Image
              className="shadow-xl"
              src={p1ChangedJpg.src}
              width={p1ChangedJpg.width}
              height={p1ChangedJpg.height}
              alt="KOF94TE on a real Neo Geo cartridge, with only the P1 chip changed"
            />
            <p>
              That is fine. That is just because the added graphics in the C ROM
              chips are not present. The hack will still fully work. You should
              be able to choose a team and play the game. If so, great news,
              your P1 chip was programmed and installed correctly.
            </p>
            <p>
              If you don&apos;t see this, or playing the game doesn&apos;t work,
              then something is wrong. Soldering in the other chips won&apos;t
              help.
            </p>
            <h3 className="font-bold text-xl">A warning about bugs</h3>
            <p>
              Many people have been playing the hack now for many hours. At this
              point it is well tested and stable, suitable to be put onto a real
              cart like this.
            </p>
            <p>
              But it is always possible a bug is found after you have made your
              cart. If so, the only way to get the bug fix is to redo the P1
              chip again in your cart. So there is a small risk in making these
              carts.
            </p>
            <h3 className="font-bold text-xl">
              Check for bugs before you start
            </h3>
            <p>
              Before you make a cart, check the{" "}
              <a href="https://github.com/city41/kof94te/issues">
                issues on GitHub
              </a>
              . If it says &quot;There aren&apos;t any open issues&quot;, that
              means no bugs have been found that haven&apos;t been fixed yet.
              You should be good to go.
            </p>
            <p>
              If there is a bug listed there, that means a bug has been found
              but it has not been fixed yet. In that case,{" "}
              <a href="mailto:matt.e.greer@gmail.com">email me</a>. I can
              probably fix the bug and then you won&apos;t have it permanently
              on your cart.
            </p>
          </div>
        </div>
        <Hr />
        <div>
          <h2 className={styles.pageHeader}>Thanks</h2>
        </div>
        <p>
          These people helped make the hack possible: SieKensou, PsychoRFG, Ge
          Os, Jay Bee, leonardofmatheus, Alice愛麗絲, Bunny-Head
        </p>
        <div className="mt-16 mb-4 flex flex-col items-center text-xs">
          <div>
            Hack created by <a href="https://mattgreer.dev">Matt Greer</a>
          </div>
          <div>Original game by SNK</div>
          <a href="https://github.com/city41/kof94te">GitHub repo</a>
          <a href="https://discord.gg/Uuaka5mq">Discord</a>
        </div>
      </div>
    </div>
  );
}

export { IndexPage };
