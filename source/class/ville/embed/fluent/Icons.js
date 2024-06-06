/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Icons",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M10 3a3 3 0 0 0-2.17 5.07c.1.11.17.25.17.4 0 .3-.24.53-.53.53H3.42a.42.42 0 0 0-.42.42A4.58 4.58 0 0 0 7.58 14H8.7c.05.09.12.17.18.25a8.6 8.6 0 0 0-.61.75h-.7A5.58 5.58 0 0 1 2 9.42C2 8.64 2.64 8 3.42 8h3.12a4 4 0 1 1 7.34-3h1.95c.65 0 1.17.52 1.17 1.17 0 1-.82 1.83-1.83 1.83h-1.7a4 4 0 0 1-.26.38c.37.2.68.48.93.8a9.84 9.84 0 0 0-1.34.12c-.2-.13-.42-.22-.67-.26-.2-.04-.38-.21-.38-.43 0-.13.07-.25.17-.33a3 3 0 0 0 .9-1.28h2.35c.46 0 .83-.37.83-.83 0-.1-.07-.17-.17-.17H13a3 3 0 0 0-3-3Zm5.66 8.15A7.11 7.11 0 0 0 13.3 11c-1.57.2-2.38 1.27-2.85 2.43a.5.5 0 1 1-.92-.37c.53-1.33 1.57-2.8 3.65-3.06 1-.12 1.92.02 2.67.18l.66.14.34.08c.3.07.5.1.64.1a.5.5 0 0 1 .45.72l-.22.38-.02.02-.32.54a7.5 7.5 0 0 0-.77 1.86c-.16.56-.37 1.31-.74 1.94a2.94 2.94 0 0 1-2.63 1.54 3.1 3.1 0 0 1-2.3-1.08 4.42 4.42 0 0 1-.56-.76c-.6.61-1.06 1.3-1.44 2.06a.5.5 0 1 1-.9-.44c1.06-2.13 2.67-3.71 5.8-4.75a.5.5 0 1 1 .3.94 10.2 10.2 0 0 0-2.99 1.51l.02.04a2.93 2.93 0 0 0 .5.73c.37.4.89.75 1.57.75.47 0 .82-.12 1.1-.3.27-.17.49-.43.67-.74.3-.51.46-1.09.62-1.64l.13-.47a8.5 8.5 0 0 1 .91-1.96l-.03-.01-.38-.09-.61-.14Z";
   var pathdfilled = "M10 2a4 4 0 0 0-3.46 6H3.42C2.64 8 2 8.64 2 9.42 2 12.5 4.5 15 7.58 15h1.27a4.55 4.55 0 0 1-.35-1.75c0-1.2.67-2.21 1.46-2.9a5.91 5.91 0 0 1 3.99-1.4 3.01 3.01 0 0 0-.74-.57 4 4 0 0 0 .25-.38h1.7C16.19 8 17 7.18 17 6.17 17 5.52 16.48 5 15.83 5h-1.96A4 4 0 0 0 10 2Zm7.5 8.5a.5.5 0 0 1 .45.72l-.22.38-.02.02-.32.54a7.5 7.5 0 0 0-.77 1.86c-.16.56-.37 1.31-.74 1.94a2.94 2.94 0 0 1-2.63 1.54c-1.06 0-1.8-.53-2.27-1.03a4.1 4.1 0 0 1-.59-.81c-.6.6-1.06 1.3-1.44 2.06a.5.5 0 1 1-.9-.44 8.47 8.47 0 0 1 3.44-3.71c.66-.42 1.4-.79 2.2-1.1a.5.5 0 1 0-.38-.93 13.17 13.17 0 0 0-3.77 2.23 2.85 2.85 0 0 1 .9-2.62c.63-.59 1.55-1 2.75-1.15a8.52 8.52 0 0 1 3.8.37l.09.03a6.17 6.17 0 0 0 .41.1h.01Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});