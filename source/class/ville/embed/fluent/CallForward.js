/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallForward",
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

   var pathdregular = "m8.93 2.08-.18-.04c-1-.17-2.02.18-2.71.94C4.67 4.5 4 6.85 4 10c0 3.15.67 5.5 2.03 7.01a2.97 2.97 0 0 0 2.9.9l.65-.15a2.2 2.2 0 0 0 1.67-2.36L11.1 14a2.2 2.2 0 0 0-1.69-1.92l-1.4-.32-.03-.02-.04-.07a1.63 1.63 0 0 1-.1-.24c-.09-.32-.14-.8-.14-1.43 0-.85.1-1.42.25-1.68a.2.2 0 0 1 .13-.09l1.33-.3A2.2 2.2 0 0 0 11.11 6l.14-1.4a2.2 2.2 0 0 0-1.68-2.37l-.64-.15ZM5.19 10c0-2.88.59-4.95 1.73-6.21.4-.45 1-.66 1.6-.57l.13.03.65.15a1 1 0 0 1 .76 1.08l-.14 1.4a1 1 0 0 1-.76.87l-1.34.31a1.4 1.4 0 0 0-.88.64c-.3.49-.42 1.25-.42 2.3 0 1.6.29 2.58 1.08 2.88l.11.03 1.45.34a1 1 0 0 1 .76.87l.14 1.4a1 1 0 0 1-.75 1.07l-.65.16c-.64.15-1.3-.05-1.74-.54-1.14-1.27-1.73-3.33-1.73-6.2Zm9.16-4.35a.5.5 0 0 0-.7.7L16.29 9H10.5a.5.5 0 0 0 0 1h5.8l-2.65 2.65a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5Z";
   var pathdfilled = "m9.29 2.2-.85-.16a2.53 2.53 0 0 0-2.32.81C4.7 4.42 4 6.87 4 10.2c0 3.32.72 5.7 2.13 7.12.6.6 1.5.83 2.34.58l.84-.25c.8-.23 1.33-1 1.24-1.82l-.17-1.63a1.53 1.53 0 0 0-1.26-1.36l-1.8-.32a6.36 6.36 0 0 1-.16-4.98l1.93-.5c.7-.19 1.21-.8 1.28-1.5l.17-1.65a1.54 1.54 0 0 0-1.25-1.7Zm5.06 3.45a.5.5 0 0 0-.7.7L16.29 9H10.5a.5.5 0 0 0 0 1h5.8l-2.65 2.65a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5Z";
   
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