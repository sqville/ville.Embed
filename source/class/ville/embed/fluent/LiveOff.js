/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LiveOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L4 4.71a7.97 7.97 0 0 0 .52 11.12c.2.18.48.17.67-.02.2-.2.19-.55-.03-.75a6.98 6.98 0 0 1-.45-9.64l1.06 1.06a5.48 5.48 0 0 0 .54 7.6c.18.17.46.15.64-.03.21-.21.18-.57-.04-.78a4.49 4.49 0 0 1-.43-6.08l2.36 2.35a1.25 1.25 0 0 0 1.62 1.62l6.69 6.7a.5.5 0 0 0 .7-.71L16 15.29l-.7-.7-1.07-1.07-.71-.71-2.36-2.35-1.62-1.62-6.69-6.7ZM16.62 14.5a7.96 7.96 0 0 0-.97-10.17.48.48 0 0 0-.68.01c-.2.2-.19.54.02.75a6.98 6.98 0 0 1 .9 8.68l.73.73Zm-1.82-1.82a5.47 5.47 0 0 0-.93-6.59.46.46 0 0 0-.66.02c-.2.2-.19.55.02.76a4.49 4.49 0 0 1 .83 5.07l.74.74Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l1.8 1.81a8.22 8.22 0 0 0 .65 11.36c.3.27.74.24 1.01-.03a.78.78 0 0 0-.02-1.11 6.73 6.73 0 0 1-.57-9.15l.71.71a5.73 5.73 0 0 0 .66 7.82c.3.27.73.23.99-.03.32-.33.26-.85-.04-1.14a4.24 4.24 0 0 1-.54-5.58l1.85 1.84a1.5 1.5 0 0 0 2 2l6.5 6.5a.5.5 0 0 0 .7-.7l-1.8-1.81-1.07-1.07-.71-.71-1.07-1.07-1.85-1.84-2-2L7.4 6.69l-.94-.94-.82-.82L4.7 4 2.85 2.15Zm13.8 12.38a8.21 8.21 0 0 0-1.08-10.37.73.73 0 0 0-1.02 0c-.31.32-.28.8 0 1.1a6.73 6.73 0 0 1 1.01 8.18l1.09 1.09Zm-1.82-1.83a5.73 5.73 0 0 0-1.04-6.79.71.71 0 0 0-1 .02c-.32.32-.28.82.01 1.11a4.24 4.24 0 0 1 .9 4.54l1.13 1.12Z";
   
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